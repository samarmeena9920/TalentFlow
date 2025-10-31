import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Candidate, CandidateStage } from '@/lib/db';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { useToast } from '@/hooks/use-toast';

const stages: { id: CandidateStage; label: string; variant: 'default' | 'secondary' | 'warning' | 'success' | 'destructive' }[] = [
  { id: 'applied', label: 'Applied', variant: 'default' },
  { id: 'screen', label: 'Screening', variant: 'secondary' },
  { id: 'tech', label: 'Technical', variant: 'warning' },
  { id: 'offer', label: 'Offer', variant: 'success' },
  { id: 'hired', label: 'Hired', variant: 'success' },
  { id: 'rejected', label: 'Rejected', variant: 'destructive' },
];

export default function Kanban() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/candidates?page=1&pageSize=2000');
      const data = await response.json();
      setCandidates(data.data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load candidates',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const { draggableId, destination } = result;
    const newStage = destination.droppableId as CandidateStage;
    const candidateId = draggableId;

    // Find the candidate
    const candidate = candidates.find(c => c.id === candidateId);
    if (!candidate || candidate.stage === newStage) return;

    // Optimistic update
    const updatedCandidates = candidates.map(c =>
      c.id === candidateId ? { ...c, stage: newStage } : c
    );
    setCandidates(updatedCandidates);

    try {
      const response = await fetch(`/api/candidates/${candidateId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stage: newStage }),
      });

      if (!response.ok) {
        throw new Error('Failed to update stage');
      }

      toast({
        title: 'Success',
        description: `Moved to ${newStage}`,
      });
    } catch (error) {
      // Rollback on error
      setCandidates(candidates);
      toast({
        title: 'Error',
        description: 'Failed to update candidate stage',
        variant: 'destructive',
      });
    }
  };

  const getCandidatesByStage = (stage: CandidateStage) => {
    return candidates.filter(c => c.stage === stage);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-muted-foreground">Loading kanban board...</div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-border bg-card">
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold">Kanban Board</h1>
          <p className="text-muted-foreground mt-1">
            Drag candidates between stages
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-6 gap-4 h-full">
            {stages.map((stage) => {
              const stageCandidates = getCandidatesByStage(stage.id);
              
              return (
                <div key={stage.id} className="flex flex-col">
                  <div className="mb-4">
                    <Badge variant={stage.variant} className="mb-2">
                      {stage.label}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {stageCandidates.length} candidates
                    </p>
                  </div>

                  <Droppable droppableId={stage.id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`flex-1 space-y-2 p-2 rounded-lg border-2 border-dashed transition-colors ${
                          snapshot.isDraggingOver
                            ? 'border-primary bg-accent/50'
                            : 'border-border bg-muted/20'
                        }`}
                      >
                        {stageCandidates.map((candidate, index) => (
                          <Draggable
                            key={candidate.id}
                            draggableId={candidate.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Card
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`p-3 cursor-grab active:cursor-grabbing ${
                                  snapshot.isDragging ? 'shadow-lg' : ''
                                }`}
                              >
                                <p className="font-medium text-sm mb-1">
                                  {candidate.name}
                                </p>
                                <p className="text-xs text-muted-foreground truncate">
                                  {candidate.email}
                                </p>
                              </Card>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
