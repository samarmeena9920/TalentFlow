import { setupWorker } from 'msw/browser';
import { handlers } from './mockApi';
import { seedDatabase } from './seedData';

export async function initMockApi() {
  // Seed database first
  await seedDatabase();

  // Setup MSW worker
  const worker = setupWorker(...handlers);
  
  await worker.start({
    onUnhandledRequest: 'bypass',
    quiet: false,
  });

  console.log('🔶 Mock API ready');
}
