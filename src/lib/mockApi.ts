import { http, HttpResponse, delay } from 'msw';
import { db } from './db';

const API_BASE = '/api';

// Simulate network latency (200-1200ms)
const simulateLatency = () => delay(200 + Math.random() * 1000);

// Simulate random errors (5-10% failure rate)
const shouldSimulateError = () => Math.random() < 0.075;

export const handlers = [
  // Jobs endpoints
  http.get(`${API_BASE}/jobs`, async ({ request }) => {
    await simulateLatency();
    
    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';
    const status = url.searchParams.get('status') || '';
    const page = parseInt(url.searchParams.get('page') || '1');
    const pageSize = parseInt(url.searchParams.get('pageSize') || '10');
    const sort = url.searchParams.get('sort') || 'order';

    let jobs = await db.jobs.toArray();

    // Filter
    if (search) {
      jobs = jobs.filter(job => 
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      );
    }
    if (status) {
      jobs = jobs.filter(job => job.status === status);
    }

    // Sort
    if (sort === 'order') {
      jobs.sort((a, b) => a.order - b.order);
    } else if (sort === 'title') {
      jobs.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Paginate
    const total = jobs.length;
    const start = (page - 1) * pageSize;
    const paginatedJobs = jobs.slice(start, start + pageSize);

    return HttpResponse.json({
      data: paginatedJobs,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  }),

  http.post(`${API_BASE}/jobs`, async ({ request }) => {
    await simulateLatency();
    if (shouldSimulateError()) {
      return new HttpResponse(null, { status: 500 });
    }

    const job = await request.json() as any;
    await db.jobs.add(job);
    return HttpResponse.json(job, { status: 201 });
  }),

  http.patch(`${API_BASE}/jobs/:id`, async ({ params, request }) => {
    await simulateLatency();
    if (shouldSimulateError()) {
      return new HttpResponse(null, { status: 500 });
    }

    const { id } = params;
    const updates = await request.json() as any;
    await db.jobs.update(id as string, updates);
    const job = await db.jobs.get(id as string);
    return HttpResponse.json(job);
  }),

  http.patch(`${API_BASE}/jobs/:id/reorder`, async ({ params, request }) => {
    await simulateLatency();
    // Higher error rate for reorder to test rollback
    if (Math.random() < 0.1) {
      return new HttpResponse(null, { status: 500 });
    }

    const { id } = params;
    const { fromOrder, toOrder } = await request.json() as any;
    
    // Get all jobs and reorder
    const jobs = await db.jobs.orderBy('order').toArray();
    const jobToMove = jobs.find(j => j.id === id);
    
    if (!jobToMove) {
      return new HttpResponse(null, { status: 404 });
    }

    // Remove from old position
    jobs.splice(fromOrder, 1);
    // Insert at new position
    jobs.splice(toOrder, 0, jobToMove);

    // Update orders
    await Promise.all(
      jobs.map((job, index) => 
        db.jobs.update(job.id, { order: index })
      )
    );

    return HttpResponse.json({ success: true });
  }),

  // Candidates endpoints
  http.get(`${API_BASE}/candidates`, async ({ request }) => {
    await simulateLatency();
    
    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';
    const stage = url.searchParams.get('stage') || '';
    const page = parseInt(url.searchParams.get('page') || '1');
    const pageSize = parseInt(url.searchParams.get('pageSize') || '50');

    let candidates = await db.candidates.toArray();

    // Filter
    if (search) {
      candidates = candidates.filter(c => 
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (stage) {
      candidates = candidates.filter(c => c.stage === stage);
    }

    // Paginate
    const total = candidates.length;
    const start = (page - 1) * pageSize;
    const paginatedCandidates = candidates.slice(start, start + pageSize);

    return HttpResponse.json({
      data: paginatedCandidates,
      total,
      page,
      pageSize,
    });
  }),

  http.post(`${API_BASE}/candidates`, async ({ request }) => {
    await simulateLatency();
    if (shouldSimulateError()) {
      return new HttpResponse(null, { status: 500 });
    }

    const candidate = await request.json() as any;
    await db.candidates.add(candidate);
    
    // Create stage transition
    await db.stageTransitions.add({
      id: `transition-${Date.now()}`,
      candidateId: candidate.id,
      fromStage: null,
      toStage: candidate.stage,
      timestamp: new Date().toISOString(),
    });

    return HttpResponse.json(candidate, { status: 201 });
  }),

  http.patch(`${API_BASE}/candidates/:id`, async ({ params, request }) => {
    await simulateLatency();
    if (shouldSimulateError()) {
      return new HttpResponse(null, { status: 500 });
    }

    const { id } = params;
    const updates = await request.json() as any;
    
    const candidate = await db.candidates.get(id as string);
    if (!candidate) {
      return new HttpResponse(null, { status: 404 });
    }

    // If stage changed, create transition
    if (updates.stage && updates.stage !== candidate.stage) {
      await db.stageTransitions.add({
        id: `transition-${Date.now()}-${Math.random()}`,
        candidateId: id as string,
        fromStage: candidate.stage,
        toStage: updates.stage,
        timestamp: new Date().toISOString(),
        notes: updates.notes,
      });
    }

    await db.candidates.update(id as string, updates);
    const updatedCandidate = await db.candidates.get(id as string);
    return HttpResponse.json(updatedCandidate);
  }),

  http.get(`${API_BASE}/candidates/:id/timeline`, async ({ params }) => {
    await simulateLatency();
    
    const { id } = params;
    const transitions = await db.stageTransitions
      .where('candidateId')
      .equals(id as string)
      .toArray();
    
    return HttpResponse.json(transitions);
  }),

  // Assessments endpoints
  http.get(`${API_BASE}/assessments`, async () => {
    await simulateLatency();
    
    const assessments = await db.assessments.toArray();
    return HttpResponse.json(assessments);
  }),

  http.get(`${API_BASE}/assessments/:jobId`, async ({ params }) => {
    await simulateLatency();
    
    const { jobId } = params;
    const assessment = await db.assessments
      .where('jobId')
      .equals(jobId as string)
      .first();
    
    return HttpResponse.json(assessment || null);
  }),

  http.put(`${API_BASE}/assessments/:jobId`, async ({ params, request }) => {
    await simulateLatency();
    if (shouldSimulateError()) {
      return new HttpResponse(null, { status: 500 });
    }

    const { jobId } = params;
    const assessment = await request.json() as any;
    
    const existing = await db.assessments
      .where('jobId')
      .equals(jobId as string)
      .first();

    if (existing) {
      await db.assessments.update(existing.id, assessment);
    } else {
      await db.assessments.add(assessment);
    }

    return HttpResponse.json(assessment);
  }),

  http.post(`${API_BASE}/assessments/:jobId/submit`, async ({ params, request }) => {
    await simulateLatency();
    if (shouldSimulateError()) {
      return new HttpResponse(null, { status: 500 });
    }

    const response = await request.json() as any;
    await db.assessmentResponses.add(response);
    return HttpResponse.json(response, { status: 201 });
  }),
];
