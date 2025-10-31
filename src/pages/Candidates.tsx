import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { Candidate } from '@/lib/types';
import { mockCandidates } from '@/lib/types';
import { CandidateTable } from '@/components/ui/candidate-table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Candidates() {
  const [candidates] = useState<Candidate[]>(mockCandidates);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  // Client-side search and type filter
  const filteredCandidates = candidates.filter(candidate => {
    if (!search && typeFilter === 'all') return true;
    
    const matchesSearch = !search || 
      candidate.id.toLowerCase().includes(search.toLowerCase()) ||
      candidate.company.name.toLowerCase().includes(search.toLowerCase()) ||
      candidate.position.toLowerCase().includes(search.toLowerCase());
      
    const matchesType = typeFilter === 'all' || candidate.type === typeFilter;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-border bg-card">
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold">Candidates</h1>
          <p className="text-muted-foreground mt-1">
            {filteredCandidates.length} candidates
          </p>
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
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="FULLTIME">Full Time</SelectItem>
            <SelectItem value="PART TIME">Part Time</SelectItem>
            <SelectItem value="FREELANCE">Freelance</SelectItem>
            <SelectItem value="offer">Offer</SelectItem>
            <SelectItem value="hired">Hired</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        {filteredCandidates.length === 0 ? (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            No candidates found
          </div>
        ) : (
          <CandidateTable candidates={filteredCandidates} />
        )}
      </div>
    </div>
  );
}
