import { useState, useMemo } from 'react';
import { Search, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { Candidate } from '@/lib/types';
import { mockCandidates } from '@/lib/types';
import { CandidateTable } from '@/components/ui/candidate-table';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Candidates() {
  const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const { toast } = useToast();

  // dialog state for adding candidate
  const [dialogOpen, setDialogOpen] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [employmentType, setEmploymentType] = useState<string>('FULLTIME');
  const [status, setStatus] = useState<string>('Applied');
  const [hasContact, setHasContact] = useState(true);
  const [hasEmail, setHasEmail] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Client-side search and type filter
  const filteredCandidates = useMemo(() => {
    return candidates.filter(candidate => {
      const matchesSearch = !search || 
        candidate.id.toLowerCase().includes(search.toLowerCase()) ||
        candidate.company.name.toLowerCase().includes(search.toLowerCase()) ||
        candidate.position.toLowerCase().includes(search.toLowerCase());
        
      const matchesType = typeFilter === 'all' || candidate.type === typeFilter;
      const matchesStatus = statusFilter === 'all' || candidate.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [candidates, search, typeFilter, statusFilter]);

  const handleCreateCandidate = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!companyName.trim() || !position.trim()) {
      toast({ title: 'Validation', description: 'Company and position are required', variant: 'destructive' });
      return;
    }

    setSubmitting(true);
    try {
      const id = `#APL-${Math.floor(1000 + Math.random() * 9000)}`;
      const dateApplied = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });

      const newCandidate: Candidate = {
        id,
        dateApplied,
        company: {
          name: companyName,
          department: undefined,
          logo: '/companies/default.png',
        },
        type: employmentType as any,
        position,
        status: status as any,
        hasContact,
        hasEmail,
      };

      // Optimistically update UI
      setCandidates((prev) => [newCandidate, ...prev]);

      // Try to POST to API (if mock API present)
      try {
        await fetch('/api/candidates', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newCandidate),
        });
      } catch (err) {
        // ignore network errors for now; UI already updated
      }

      setDialogOpen(false);
      setCompanyName('');
      setPosition('');
      setEmploymentType('FULLTIME');
      setStatus('Applied');
      setHasContact(true);
      setHasEmail(true);

      toast({ title: 'Success', description: 'Candidate added' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-border bg-card">
        <div className="flex items-center justify-between px-8 py-6">
          <div>
            <h1 className="text-3xl font-bold">Candidates</h1>
            <p className="text-muted-foreground mt-1">
              {filteredCandidates.length} candidates
            </p>
          </div>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Candidate
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Candidate</DialogTitle>
                <DialogDescription>Enter candidate details to add to the list.</DialogDescription>
              </DialogHeader>

              <form className="mt-4 space-y-4" onSubmit={(e) => handleCreateCandidate(e)}>
                <div>
                  <label className="block text-sm font-medium mb-1">Company</label>
                  <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company name" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Position</label>
                  <Input value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position / title" />
                </div>

                <div className="flex gap-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">Type</label>
                    <Select value={employmentType} onValueChange={setEmploymentType}>
                      <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FULLTIME">Full Time</SelectItem>
                        <SelectItem value="PART TIME">Part Time</SelectItem>
                        <SelectItem value="FREELANCE">Freelance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <Select value={status} onValueChange={setStatus}>
                      <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Applied">Applied</SelectItem>
                        <SelectItem value="Screening">Screening</SelectItem>
                        <SelectItem value="Technical">Technical</SelectItem>
                        <SelectItem value="Offer">Offer</SelectItem>
                        <SelectItem value="Hired">Hired</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={hasContact} onChange={(e) => setHasContact(e.target.checked)} />
                    <span className="text-sm">Has Contact</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={hasEmail} onChange={(e) => setHasEmail(e.target.checked)} />
                    <span className="text-sm">Has Email</span>
                  </label>
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" type="button" onClick={() => setDialogOpen(false)}>Cancel</Button>
                  </DialogClose>
                  <Button type="submit" disabled={submitting}>{submitting ? 'Adding...' : 'Add Candidate'}</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-border bg-card p-4 px-8 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search candidates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-4">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="FULLTIME">Full Time</SelectItem>
              <SelectItem value="PART TIME">Part Time</SelectItem>
              <SelectItem value="FREELANCE">Freelance</SelectItem>
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Applied">Applied</SelectItem>
              <SelectItem value="Screening">Screening</SelectItem>
              <SelectItem value="Technical">Technical</SelectItem>
              <SelectItem value="Offer">Offer</SelectItem>
              <SelectItem value="Hired">Hired</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        {filteredCandidates.length === 0 ? (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            No candidates found
          </div>
        ) : (
          <CandidateTable 
            key={`${typeFilter}-${statusFilter}-${search}`}
            candidates={filteredCandidates} 
          />
        )}
      </div>
    </div>
  );
}
