import { beforeAll, afterAll } from 'vitest';

beforeAll(async () => {
  // Setup test environment
  process.env['NODE_ENV'] = 'test';
  process.env['JWT_SECRET'] = 'test-secret';
});

afterAll(async () => {
  // Cleanup
});
