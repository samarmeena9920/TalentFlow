import { cn } from '@/lib/utils';
import { Badge } from './badge';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';
import { MoreVertical, Phone, Mail } from 'lucide-react';
import type { Candidate } from '@/lib/types';

const statusStyles = {
  'Applied': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  'Screening': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
  'Technical': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  'Offer': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'Hired': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'Rejected': 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400'
};

interface CandidateRowProps {
  candidate: Candidate;
}

export function CandidateRow({ candidate }: CandidateRowProps) {
  return (
    <tr className="border-b border-border hover:bg-muted/50 [&:last-child]:border-0">
      <td className="p-4">
        <span className="font-medium">{candidate.id}</span>
      </td>
      <td className="p-4 text-sm text-muted-foreground">
        {candidate.dateApplied}
      </td>
      <td className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={candidate.company.logo} />
            <AvatarFallback>{candidate.company.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{candidate.company.name}</div>
            <div className="text-sm text-muted-foreground">
              {candidate.company.department}
            </div>
          </div>
        </div>
      </td>
      <td className="p-4">
        <Badge variant="outline" className="font-medium">
          {candidate.type}
        </Badge>
      </td>
      <td className="p-4 font-medium">
        {candidate.position}
      </td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          {candidate.hasContact && (
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Phone className="h-4 w-4" />
            </Button>
          )}
          {candidate.hasEmail && (
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Mail className="h-4 w-4" />
            </Button>
          )}
        </div>
      </td>
      <td className="p-4">
        <Badge 
          variant="secondary" 
          className={cn("font-medium", statusStyles[candidate.status])}
        >
          {candidate.status}
        </Badge>
      </td>
      <td className="p-4">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </td>
    </tr>
  );
}

interface CandidateTableProps {
  candidates: Candidate[];
}

export function CandidateTable({ candidates }: CandidateTableProps) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left">
        <thead className="border-b border-border bg-card text-sm">
          <tr>
            <th scope="col" className="p-4 font-medium">ID</th>
            <th scope="col" className="p-4 font-medium">Date Applied</th>
            <th scope="col" className="p-4 font-medium">Company</th>
            <th scope="col" className="p-4 font-medium">Type</th>
            <th scope="col" className="p-4 font-medium">Position</th>
            <th scope="col" className="p-4 font-medium">Contact</th>
            <th scope="col" className="p-4 font-medium">Status</th>
            <th scope="col" className="p-4 font-medium">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <CandidateRow key={candidate.id} candidate={candidate} />
          ))}
        </tbody>
      </table>
    </div>
  );
}