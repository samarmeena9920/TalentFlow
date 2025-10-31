import Dexie, { Table } from 'dexie';

export type JobStatus = 'active' | 'archived';
export type CandidateStage = 'applied' | 'screen' | 'tech' | 'offer' | 'hired' | 'rejected';

export interface Job {
  id: string;
  title: string;
  slug: string;
  status: JobStatus;
  tags: string[];
  order: number;
  description?: string;
  createdAt: string;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  stage: CandidateStage;
  jobId: string;
  appliedAt: string;
  notes?: string;
}

export interface StageTransition {
  id: string;
  candidateId: string;
  fromStage: CandidateStage | null;
  toStage: CandidateStage;
  timestamp: string;
  notes?: string;
}

export type QuestionType = 'single-choice' | 'multi-choice' | 'short-text' | 'long-text' | 'numeric' | 'file-upload';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  required: boolean;
  options?: string[];
  numericMin?: number;
  numericMax?: number;
  maxLength?: number;
  conditionalOn?: {
    questionId: string;
    value: string | string[];
  };
}

export interface AssessmentSection {
  id: string;
  title: string;
  questions: Question[];
}

export interface Assessment {
  id: string;
  jobId: string;
  title: string;
  sections: AssessmentSection[];
  createdAt: string;
}

export interface AssessmentResponse {
  id: string;
  assessmentId: string;
  candidateId: string;
  answers: Record<string, any>;
  submittedAt: string;
}

class TalentFlowDB extends Dexie {
  jobs!: Table<Job, string>;
  candidates!: Table<Candidate, string>;
  stageTransitions!: Table<StageTransition, string>;
  assessments!: Table<Assessment, string>;
  assessmentResponses!: Table<AssessmentResponse, string>;

  constructor() {
    super('TalentFlowDB');
    this.version(1).stores({
      jobs: 'id, title, status, order',
      candidates: 'id, name, email, stage, jobId',
      stageTransitions: 'id, candidateId, timestamp',
      assessments: 'id, jobId',
      assessmentResponses: 'id, assessmentId, candidateId',
    });
  }
}

export const db = new TalentFlowDB();
