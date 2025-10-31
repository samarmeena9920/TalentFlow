import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Plus, Trash2, FileText } from 'lucide-react';
import { Assessment, AssessmentSection, Question, QuestionType } from '@/lib/db';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const questionTypes: { value: QuestionType; label: string }[] = [
  { value: 'single-choice', label: 'Single Choice' },
  { value: 'multi-choice', label: 'Multiple Choice' },
  { value: 'short-text', label: 'Short Text' },
  { value: 'long-text', label: 'Long Text' },
  { value: 'numeric', label: 'Numeric' },
  { value: 'file-upload', label: 'File Upload' },
];

export default function Assessments() {
  const [selectedJobId, setSelectedJobId] = useState<string>('job-1');
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [previewAnswers, setPreviewAnswers] = useState<Record<string, any>>({});
  const [savedAssessments, setSavedAssessments] = useState<Assessment[]>([]);
  const [savedAssessmentsOpen, setSavedAssessmentsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (selectedJobId) {
      loadAssessment();
    }
  }, [selectedJobId]);

  const loadAssessment = async () => {
    try {
      const response = await fetch(`/api/assessments/${selectedJobId}`);
      const data = await response.json();
      
      if (data) {
        setAssessment(data);
      } else {
        // Create new assessment structure
        setAssessment({
          id: `assessment-${Date.now()}`,
          jobId: selectedJobId,
          title: 'New Assessment',
          sections: [],
          createdAt: new Date().toISOString(),
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load assessment',
        variant: 'destructive',
      });
    }
  };

  const saveAssessment = async () => {
    if (!assessment) return;

    try {
      await fetch(`/api/assessments/${selectedJobId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(assessment),
      });

      toast({
        title: 'Success',
        description: 'Assessment saved',
      });
      
      // Reload saved assessments
      loadSavedAssessments();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save assessment',
        variant: 'destructive',
      });
    }
  };

  const loadSavedAssessments = async () => {
    try {
      const response = await fetch('/api/assessments');
      const data = await response.json();
      setSavedAssessments(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load saved assessments',
        variant: 'destructive',
      });
    }
  };

  const handleOpenSavedAssessments = () => {
    loadSavedAssessments();
    setSavedAssessmentsOpen(true);
  };

  const handleLoadAssessment = (assessment: Assessment) => {
    setSelectedJobId(assessment.jobId);
    setAssessment(assessment);
    setSavedAssessmentsOpen(false);
  };

  const addSection = () => {
    if (!assessment) return;
    
    const newSection: AssessmentSection = {
      id: `section-${Date.now()}`,
      title: 'New Section',
      questions: [],
    };

    setAssessment({
      ...assessment,
      sections: [...assessment.sections, newSection],
    });
  };

  const updateSection = (sectionId: string, updates: Partial<AssessmentSection>) => {
    if (!assessment) return;

    setAssessment({
      ...assessment,
      sections: assessment.sections.map(s =>
        s.id === sectionId ? { ...s, ...updates } : s
      ),
    });
  };

  const deleteSection = (sectionId: string) => {
    if (!assessment) return;

    setAssessment({
      ...assessment,
      sections: assessment.sections.filter(s => s.id !== sectionId),
    });
  };

  const addQuestion = (sectionId: string) => {
    if (!assessment) return;

    const newQuestion: Question = {
      id: `q-${Date.now()}`,
      type: 'short-text',
      text: 'New Question',
      required: false,
    };

    setAssessment({
      ...assessment,
      sections: assessment.sections.map(s =>
        s.id === sectionId
          ? { ...s, questions: [...s.questions, newQuestion] }
          : s
      ),
    });
  };

  const updateQuestion = (
    sectionId: string,
    questionId: string,
    updates: Partial<Question>
  ) => {
    if (!assessment) return;

    setAssessment({
      ...assessment,
      sections: assessment.sections.map(s =>
        s.id === sectionId
          ? {
              ...s,
              questions: s.questions.map(q =>
                q.id === questionId ? { ...q, ...updates } : q
              ),
            }
          : s
      ),
    });
  };

  const deleteQuestion = (sectionId: string, questionId: string) => {
    if (!assessment) return;

    setAssessment({
      ...assessment,
      sections: assessment.sections.map(s =>
        s.id === sectionId
          ? { ...s, questions: s.questions.filter(q => q.id !== questionId) }
          : s
      ),
    });
  };

  const shouldShowQuestion = (question: Question): boolean => {
    if (!question.conditionalOn) return true;
    
    const answer = previewAnswers[question.conditionalOn.questionId];
    if (!answer) return false;

    if (Array.isArray(question.conditionalOn.value)) {
      return Array.isArray(answer) 
        ? answer.some(a => question.conditionalOn!.value.includes(a))
        : question.conditionalOn.value.includes(answer);
    }

    return answer === question.conditionalOn.value;
  };

  if (!assessment) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="border-b border-border bg-card">
        <div className="flex items-center justify-between px-8 py-6">
          <div>
            <h1 className="text-3xl font-bold">Assessments</h1>
            <p className="text-muted-foreground mt-1">Build job-specific assessments</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleOpenSavedAssessments}
            >
              <FileText className="h-4 w-4 mr-2" />
              Saved Assessments
            </Button>
            <Button
              variant={previewMode ? 'outline' : 'default'}
              onClick={() => {
                setPreviewMode(!previewMode);
                setPreviewAnswers({}); // Reset answers when switching modes
              }}
            >
              {previewMode ? 'Exit Preview' : 'Preview Form'}
            </Button>
            {!previewMode && <Button onClick={saveAssessment}>Save Assessment</Button>}
          </div>
        </div>
      </div>

      <div className={`${previewMode ? '' : 'grid grid-cols-2'} h-[calc(100%-5rem)]`}>
        {/* Builder */}
        {!previewMode && (
          <div className="border-r border-border overflow-auto p-8">
            <div className="mb-6">
              <Label>Assessment Title</Label>
              <Input
                value={assessment.title}
                onChange={(e) =>
                  setAssessment({ ...assessment, title: e.target.value })
                }
                className="mt-2"
              />
          </div>

          {assessment.sections.map((section) => (
            <Card key={section.id} className="mb-4 p-4">
              <div className="flex items-center justify-between mb-4">
                <Input
                  value={section.title}
                  onChange={(e) =>
                    updateSection(section.id, { title: e.target.value })
                  }
                  className="font-semibold"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteSection(section.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {section.questions.map((question) => (
                  <Card key={question.id} className="p-3 bg-muted/50">
                    <div className="flex gap-2 mb-2">
                      <Select
                        value={question.type}
                        onValueChange={(value: QuestionType) =>
                          updateQuestion(section.id, question.id, { type: value })
                        }
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {questionTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteQuestion(section.id, question.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <Input
                      value={question.text}
                      onChange={(e) =>
                        updateQuestion(section.id, question.id, {
                          text: e.target.value,
                        })
                      }
                      placeholder="Question text"
                      className="mb-2"
                    />

                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={question.required}
                        onCheckedChange={(checked) =>
                          updateQuestion(section.id, question.id, {
                            required: checked as boolean,
                          })
                        }
                      />
                      <Label className="text-sm">Required</Label>
                    </div>

                    {(question.type === 'single-choice' ||
                      question.type === 'multi-choice') && (
                      <Textarea
                        placeholder="Options (one per line)"
                        value={question.options?.join('\n') || ''}
                        onChange={(e) =>
                          updateQuestion(section.id, question.id, {
                            options: e.target.value.split('\n').filter(Boolean),
                          })
                        }
                        className="mt-2"
                      />
                    )}

                    {question.type === 'numeric' && (
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <Input
                          type="number"
                          placeholder="Min"
                          value={question.numericMin || ''}
                          onChange={(e) =>
                            updateQuestion(section.id, question.id, {
                              numericMin: parseInt(e.target.value),
                            })
                          }
                        />
                        <Input
                          type="number"
                          placeholder="Max"
                          value={question.numericMax || ''}
                          onChange={(e) =>
                            updateQuestion(section.id, question.id, {
                              numericMax: parseInt(e.target.value),
                            })
                          }
                        />
                      </div>
                    )}
                  </Card>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addQuestion(section.id)}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Question
                </Button>
              </div>
            </Card>
          ))}

          <Button onClick={addSection} variant="outline" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Section
          </Button>
        </div>
        )}

        {/* Live Preview */}
        <div className={`overflow-auto p-8 ${previewMode ? 'bg-background' : 'bg-muted/20'}`}>
          <h2 className="text-2xl font-bold mb-6">{assessment.title}</h2>

          {assessment.sections.map((section) => (
            <div key={section.id} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>

              <div className="space-y-4">
                {section.questions
                  .filter(shouldShowQuestion)
                  .map((question) => (
                    <Card key={question.id} className="p-4">
                      <Label className="mb-2 block">
                        {question.text}
                        {question.required && (
                          <span className="text-destructive ml-1">*</span>
                        )}
                      </Label>

                      {question.type === 'short-text' && (
                        <Input
                          placeholder="Your answer"
                          onChange={(e) =>
                            setPreviewAnswers({
                              ...previewAnswers,
                              [question.id]: e.target.value,
                            })
                          }
                        />
                      )}

                      {question.type === 'long-text' && (
                        <Textarea
                          placeholder="Your answer"
                          onChange={(e) =>
                            setPreviewAnswers({
                              ...previewAnswers,
                              [question.id]: e.target.value,
                            })
                          }
                        />
                      )}

                      {question.type === 'numeric' && (
                        <Input
                          type="number"
                          min={question.numericMin}
                          max={question.numericMax}
                          onChange={(e) =>
                            setPreviewAnswers({
                              ...previewAnswers,
                              [question.id]: e.target.value,
                            })
                          }
                        />
                      )}

                      {question.type === 'single-choice' && (
                        <div className="space-y-2">
                          {question.options?.map((option) => (
                            <div key={option} className="flex items-center gap-2">
                              <input
                                type="radio"
                                name={question.id}
                                value={option}
                                onChange={(e) =>
                                  setPreviewAnswers({
                                    ...previewAnswers,
                                    [question.id]: e.target.value,
                                  })
                                }
                              />
                              <Label>{option}</Label>
                            </div>
                          ))}
                        </div>
                      )}

                      {question.type === 'multi-choice' && (
                        <div className="space-y-2">
                          {question.options?.map((option) => (
                            <div key={option} className="flex items-center gap-2">
                              <Checkbox />
                              <Label>{option}</Label>
                            </div>
                          ))}
                        </div>
                      )}

                      {question.type === 'file-upload' && (
                        <Input type="file" />
                      )}
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saved Assessments Dialog */}
      <Dialog open={savedAssessmentsOpen} onOpenChange={setSavedAssessmentsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Saved Assessments</DialogTitle>
            <DialogDescription>
              Select an assessment to load or create a new one
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {savedAssessments.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No saved assessments yet. Create your first assessment to get started!
              </p>
            ) : (
              savedAssessments.map((assessment) => {
                const totalQuestions = assessment.sections.reduce(
                  (sum, section) => sum + section.questions.length,
                  0
                );
                return (
                  <Card
                    key={assessment.id}
                    className="p-4 cursor-pointer hover:bg-accent transition-colors"
                    onClick={() => handleLoadAssessment(assessment)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{assessment.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Job ID: {assessment.jobId}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {totalQuestions} questions across {assessment.sections.length} section(s)
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Created: {new Date(assessment.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
