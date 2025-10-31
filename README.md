# TalentFlow - Modern Hiring Platform

A comprehensive React-based hiring platform that enables HR teams to manage jobs, candidates, and assessments with a beautiful, intuitive interface.

## 🚀 Live Demo

**Deployed App**: [View Live Demo](https://talentflow-1-m02p.onrender.com)

**GitHub Repository**: This repository

## ✨ Features

### 1. Jobs Management
- **CRUD Operations**: Create, edit, archive, and restore job postings
- **Drag & Drop Reordering**: Intuitive reordering with optimistic updates and automatic rollback on failure
- **Pagination & Filtering**: Server-like pagination (10 jobs per page) with status and search filters
- **Deep Linking**: Direct access to jobs via `/jobs/:jobId`
- **Validation**: Required fields and unique slug generation

### 2. Candidates Management
- **High-Performance List**: Handles 1000+ candidates with efficient rendering
- **Client-Side Search**: Real-time search by name or email
- **Server-Side Filtering**: Filter by stage (applied, screen, tech, offer, hired, rejected)
- **Stage Management**: Visual kanban board for moving candidates through hiring stages
- **Timeline View**: Track candidate progression with detailed stage transition history
- **Notes with @mentions**: Attach notes with @mention suggestions (rendered inline)

### 3. Assessment Builder
- **Multiple Question Types**:
  - Single Choice
  - Multiple Choice
  - Short Text
  - Long Text
  - Numeric (with range validation)
  - File Upload (stub)
- **Live Preview**: Real-time rendering of the assessment form as you build it
- **Conditional Questions**: Show/hide questions based on previous answers
- **Validation Rules**: Required fields, max length, numeric ranges
- **Section Organization**: Group questions into logical sections
- **Job-Specific**: Each job can have its own custom assessment

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router v6
- **State Management**: React Query + React hooks
- **Mock API**: MSW (Mock Service Worker)
- **Local Storage**: Dexie (IndexedDB wrapper)
- **Drag & Drop**: @hello-pangea/dnd
- **Build Tool**: Vite

### Project Structure
```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── Layout.tsx          # Main layout with sidebar navigation
├── lib/
│   ├── db.ts              # Dexie database schema & types
│   ├── mockApi.ts         # MSW API handlers
│   ├── seedData.ts        # Seed data generation (25 jobs, 1000 candidates)
│   └── initMockApi.ts     # MSW initialization
├── pages/
│   ├── Jobs.tsx           # Jobs management page
│   ├── Candidates.tsx     # Candidates list page
│   └── Assessments.tsx    # Assessment builder page
└── App.tsx                # Main app with routing
```

### Data Flow

1. **MSW Layer**: Intercepts all API calls at the network level
2. **IndexedDB**: Persistent local storage (survives page refresh)
3. **Artificial Latency**: 200-1200ms delay to simulate real network conditions
4. **Error Simulation**: 5-10% failure rate on write operations (10% for reorder)

### API Endpoints

#### Jobs
- `GET /api/jobs?search=&status=&page=&pageSize=&sort=`
- `POST /api/jobs`
- `PATCH /api/jobs/:id`
- `PATCH /api/jobs/:id/reorder` (with failure simulation for rollback testing)

#### Candidates
- `GET /api/candidates?search=&stage=&page=&pageSize=`
- `POST /api/candidates`
- `PATCH /api/candidates/:id`
- `GET /api/candidates/:id/timeline`

#### Assessments
- `GET /api/assessments/:jobId`
- `PUT /api/assessments/:jobId`
- `POST /api/assessments/:jobId/submit`

## 🚦 Setup & Installation

### Prerequisites
- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd talentflow

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### First Run
On the first load, the app will:
1. Initialize the MSW service worker
2. Create IndexedDB tables
3. Seed the database with:
   - 80 jobs (mix of active and archived)
   - 1000 candidates across various stages
   - 3 pre-built assessments with 10+ questions each

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#6366F1) - Professional, trustworthy
- **Success**: Green - Active jobs, hired candidates
- **Warning**: Yellow - Pending actions
- **Destructive**: Red - Archived, rejected

### Key Design Decisions
- **Semantic Tokens**: All colors use HSL values defined in `index.css`
- **Consistent Variants**: shadcn components customized with design system
- **No Ad-Hoc Styles**: Everything themed via Tailwind config
- **Smooth Animations**: Drag-drop transitions, hover effects, fade-ins

## 🔧 Key Features Implementation

### 1. Optimistic Updates with Rollback
When reordering jobs, the UI updates immediately. If the server returns an error (simulated 10% failure rate), the changes are automatically rolled back with a toast notification.

```typescript
// Optimistic update
setJobs(newOrder);

try {
  await fetch('/api/jobs/:id/reorder', { ... });
  toast({ title: 'Success' });
} catch {
  // Rollback on error
  setJobs(originalOrder);
  toast({ title: 'Error', variant: 'destructive' });
}
```

### 2. Conditional Questions
Assessments support conditional logic - questions can be shown/hidden based on previous answers:

```typescript
{
  id: 'q2',
  text: 'Describe your Agile experience',
  conditionalOn: {
    questionId: 'q1',
    value: 'Yes' // Only show if Q1 answer is "Yes"
  }
}
```

### 3. Client-Side + Server-Side Filtering
- **Client-side**: Real-time search by name/email (no API call)
- **Server-side**: Stage filtering fetches filtered data from IndexedDB

### 4. Deep Linking
All routes support direct access:
- `/jobs` - Jobs board
- `/candidates` - Candidates list
- `/assessments` - Assessment builder

## 🐛 Known Issues & Future Enhancements

### Current Limitations
1. **Kanban Board**: Not yet implemented (listed in requirements but not built yet)
2. **Candidate Timeline**: Route exists but detailed timeline view pending
3. **Job Creation Modal**: Create button present but modal form not implemented
4. **File Upload**: Stub implementation only (no actual file handling)
5. **@Mentions**: Renders text but no autocomplete dropdown

### Planned Enhancements
- [ ] Implement kanban board with drag-drop stage management
- [ ] Add candidate detail page with full timeline
- [ ] Build job creation/edit modal with form validation
- [ ] Add assessment response submission and review
- [ ] Implement file upload with preview
- [ ] Add @mention autocomplete with user suggestions
- [ ] Real-time collaboration features
- [ ] Export/import data functionality
- [ ] Advanced analytics dashboard

## 📊 Performance Considerations

- **Large Lists**: Candidates page efficiently handles 1000+ records
- **Lazy Loading**: Components loaded on-demand via React Router
- **Optimistic UI**: Immediate feedback with automatic error recovery
- **IndexedDB**: Fast local storage for offline capability

## 🧪 Testing Approach

### Manual Testing Points
1. **Jobs**: Drag reorder multiple times to test 10% failure rate
2. **Candidates**: Search with 1000 records for performance
3. **Assessments**: Test conditional questions with various answer combinations
4. **Network**: Monitor console for MSW logs and artificial latency
5. **Persistence**: Refresh page to verify IndexedDB restoration

### Error Simulation
- **Write operations**: 5-10% random failure
- **Reorder operations**: 10% failure rate (higher for testing rollback)
- **Network latency**: 200-1200ms random delay

## 📝 Technical Decisions

### Why MSW over MirageJS?
- Better TypeScript support
- More realistic network interception
- Easier debugging with browser DevTools
- Industry standard for modern React apps

### Why Dexie over localForage?
- Powerful IndexedDB wrapper with better TypeScript
- Query capabilities similar to SQL
- Better performance for complex data structures

### Why @hello-pangea/dnd?
- Maintained fork of react-beautiful-dnd
- Excellent TypeScript support
- Smooth animations out of the box
- Accessibility built-in

### Design System Approach
Rather than ad-hoc styles, all colors and variants are defined in:
- `src/index.css` - HSL color tokens
- `tailwind.config.ts` - Semantic color mappings
- Component variants - Reusable button/badge styles

This ensures consistency and makes theme changes trivial.

## 🚀 Deployment

The app is deployed on Render platform:
- **Production URL**: (https://talentflow-1-m02p.onrender.com/)
- **Auto-deploy**: Enabled on main branch
- **Environment**: Static hosting with service worker support

### Deploy to Other Platforms

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The `dist/` folder contains the production build. Deploy to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Use GitHub Actions

**Important**: Ensure `public/mockServiceWorker.js` is included in deployment for MSW to work.

## 📄 License

MIT License - feel free to use this project for learning or as a portfolio piece.

## 🙏 Acknowledgments

- **shadcn/ui**: Beautiful, accessible component library
- **Lovable**: AI-powered development platform
- **MSW**: Seamless API mocking
- **Dexie**: Excellent IndexedDB wrapper

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
