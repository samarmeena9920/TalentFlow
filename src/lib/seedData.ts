import { db, Job, Candidate, Assessment, CandidateStage } from './db';

const jobTitles = [
  'Senior Frontend Engineer',
  'Backend Developer',
  'Full Stack Engineer',
  'DevOps Engineer',
  'Product Manager',
  'UI/UX Designer',
  'Data Scientist',
  'Machine Learning Engineer',
  'QA Engineer',
  'Technical Writer',
  'Engineering Manager',
  'Solutions Architect',
  'Security Engineer',
  'Mobile Developer',
  'Site Reliability Engineer',
  'Platform Engineer',
  'Business Analyst',
  'Product Designer',
  'Growth Engineer',
  'Customer Success Manager',
  'Technical Support Engineer',
  'Database Administrator',
  'Cloud Architect',
  'Frontend Architect',
  'Backend Architect',
];

const techTags = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Go', 'AWS', 'Docker', 
  'Kubernetes', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka',
  'Remote', 'Full-time', 'Senior', 'Mid-level', 'Junior'
];

const firstNames = [
  'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Sophia', 'Mason', 'Isabella', 'William',
  'Mia', 'James', 'Charlotte', 'Benjamin', 'Amelia', 'Lucas', 'Harper', 'Henry', 'Evelyn', 'Alexander'
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
  'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'
];

const stages: CandidateStage[] = ['applied', 'screen', 'tech', 'offer', 'hired', 'rejected'];

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export async function seedDatabase() {
  // Check if already seeded
  const existingJobs = await db.jobs.count();
  if (existingJobs > 0) {
    console.log('Database already seeded');
    return;
  }

  console.log('Seeding database...');

  // Seed Jobs
  const jobs: Job[] = jobTitles.slice(0, 25).map((title, index) => ({
    id: `job-${index + 1}`,
    title,
    slug: generateSlug(title),
    status: Math.random() > 0.3 ? 'active' : 'archived',
    tags: Array.from({ length: Math.floor(Math.random() * 4) + 2 }, 
      () => techTags[Math.floor(Math.random() * techTags.length)]),
    order: index,
    description: `We are looking for a talented ${title} to join our growing team.`,
    createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
  }));

  await db.jobs.bulkAdd(jobs);

  // Seed Candidates (1000)
  const candidates: Candidate[] = [];
  for (let i = 0; i < 1000; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const jobId = jobs[Math.floor(Math.random() * jobs.length)].id;
    
    candidates.push({
      id: `candidate-${i + 1}`,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`,
      stage: stages[Math.floor(Math.random() * stages.length)],
      jobId,
      appliedAt: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000).toISOString(),
    });
  }

  await db.candidates.bulkAdd(candidates);

  // Seed Assessments (3 complete assessments with 10 questions each)
  const assessments: Assessment[] = [
    {
      id: 'assessment-1',
      jobId: jobs[0].id,
      title: `${jobs[0].title} Technical Assessment`,
      sections: [
        {
          id: 'section-1',
          title: 'Technical Knowledge',
          questions: [
            {
              id: 'q1',
              type: 'single-choice',
              text: 'How many years of React experience do you have?',
              required: true,
              options: ['0-1 years', '1-3 years', '3-5 years', '5+ years'],
            },
            {
              id: 'q2',
              type: 'multi-choice',
              text: 'Which state management libraries have you used?',
              required: true,
              options: ['Redux', 'MobX', 'Zustand', 'Recoil', 'Context API'],
            },
            {
              id: 'q3',
              type: 'short-text',
              text: 'What is your favorite frontend framework and why?',
              required: true,
              maxLength: 200,
            },
            {
              id: 'q4',
              type: 'multi-choice',
              text: 'Select all the CSS frameworks you have experience with:',
              required: false,
              options: ['Tailwind CSS', 'Bootstrap', 'Material-UI', 'Chakra UI', 'Styled Components'],
            },
            {
              id: 'q5',
              type: 'single-choice',
              text: 'Do you have experience with Next.js?',
              required: true,
              options: ['Yes', 'No'],
            },
          ],
        },
        {
          id: 'section-2',
          title: 'Problem Solving',
          questions: [
            {
              id: 'q6',
              type: 'long-text',
              text: 'Describe a complex technical challenge you faced and how you solved it.',
              required: true,
              maxLength: 1000,
            },
            {
              id: 'q7',
              type: 'numeric',
              text: 'On a scale of 1-10, how would you rate your TypeScript skills?',
              required: true,
              numericMin: 1,
              numericMax: 10,
            },
            {
              id: 'q8',
              type: 'short-text',
              text: 'Describe your approach to debugging production issues.',
              required: true,
              maxLength: 300,
            },
            {
              id: 'q9',
              type: 'multi-choice',
              text: 'Which testing frameworks have you used?',
              required: true,
              options: ['Jest', 'Vitest', 'Cypress', 'Playwright', 'React Testing Library'],
            },
            {
              id: 'q10',
              type: 'file-upload',
              text: 'Upload your portfolio or GitHub profile screenshot',
              required: false,
            },
          ],
        },
      ],
      createdAt: new Date().toISOString(),
    },
    {
      id: 'assessment-2',
      jobId: jobs[4].id,
      title: `${jobs[4].title} Assessment`,
      sections: [
        {
          id: 'section-1',
          title: 'Product Management Skills',
          questions: [
            {
              id: 'q1',
              type: 'single-choice',
              text: 'Have you worked with Agile methodologies?',
              required: true,
              options: ['Yes', 'No'],
            },
            {
              id: 'q2',
              type: 'long-text',
              text: 'If yes, describe your experience with Agile.',
              required: false,
              maxLength: 500,
              conditionalOn: {
                questionId: 'q1',
                value: 'Yes',
              },
            },
            {
              id: 'q3',
              type: 'multi-choice',
              text: 'Which product management tools are you familiar with?',
              required: true,
              options: ['Jira', 'Asana', 'Linear', 'Trello', 'Monday.com'],
            },
            {
              id: 'q4',
              type: 'numeric',
              text: 'Years of experience as a Product Manager',
              required: true,
              numericMin: 0,
              numericMax: 30,
            },
            {
              id: 'q5',
              type: 'single-choice',
              text: 'What is your preferred method for gathering user feedback?',
              required: true,
              options: ['User interviews', 'Surveys', 'Analytics data', 'Focus groups', 'All of the above'],
            },
            {
              id: 'q6',
              type: 'multi-choice',
              text: 'Select the methodologies you have experience with:',
              required: true,
              options: ['Scrum', 'Kanban', 'Waterfall', 'Lean', 'Design Thinking'],
            },
            {
              id: 'q7',
              type: 'short-text',
              text: 'Describe a successful product launch you managed.',
              required: true,
              maxLength: 400,
            },
            {
              id: 'q8',
              type: 'short-text',
              text: 'How do you prioritize features in a product roadmap?',
              required: true,
              maxLength: 300,
            },
            {
              id: 'q9',
              type: 'long-text',
              text: 'Tell us about a time you had to make a difficult product decision. What was your process?',
              required: true,
              maxLength: 800,
            },
            {
              id: 'q10',
              type: 'single-choice',
              text: 'Rate your experience with data-driven decision making:',
              required: true,
              options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
            },
          ],
        },
      ],
      createdAt: new Date().toISOString(),
    },
    {
      id: 'assessment-3',
      jobId: jobs[6].id,
      title: `${jobs[6].title} Technical Screening`,
      sections: [
        {
          id: 'section-1',
          title: 'Data Science Fundamentals',
          questions: [
            {
              id: 'q1',
              type: 'single-choice',
              text: 'What is your primary programming language for data science?',
              required: true,
              options: ['Python', 'R', 'Julia', 'Other'],
            },
            {
              id: 'q2',
              type: 'multi-choice',
              text: 'Which ML frameworks have you used?',
              required: true,
              options: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost'],
            },
            {
              id: 'q3',
              type: 'numeric',
              text: 'Years of experience in data science',
              required: true,
              numericMin: 0,
              numericMax: 20,
            },
            {
              id: 'q4',
              type: 'long-text',
              text: 'Describe a machine learning project you are proud of.',
              required: true,
              maxLength: 1000,
            },
            {
              id: 'q5',
              type: 'single-choice',
              text: 'What is your expertise level with neural networks?',
              required: true,
              options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
            },
            {
              id: 'q6',
              type: 'multi-choice',
              text: 'Which data visualization tools have you used?',
              required: true,
              options: ['Tableau', 'Power BI', 'matplotlib', 'Seaborn', 'D3.js', 'Plotly'],
            },
            {
              id: 'q7',
              type: 'short-text',
              text: 'How do you handle missing data in a dataset?',
              required: true,
              maxLength: 250,
            },
            {
              id: 'q8',
              type: 'multi-choice',
              text: 'Select all databases you have worked with:',
              required: true,
              options: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cassandra'],
            },
            {
              id: 'q9',
              type: 'long-text',
              text: 'Describe your experience with cloud platforms for ML deployment.',
              required: false,
              maxLength: 600,
            },
            {
              id: 'q10',
              type: 'file-upload',
              text: 'Upload your resume (PDF)',
              required: false,
            },
          ],
        },
      ],
      createdAt: new Date().toISOString(),
    },
  ];

  await db.assessments.bulkAdd(assessments);

  console.log('Database seeded successfully!');
  console.log(`- ${jobs.length} jobs`);
  console.log(`- ${candidates.length} candidates`);
  console.log(`- ${assessments.length} assessments`);
}
