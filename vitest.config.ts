import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    dir: 'tests/api',
    globalSetup: [
      '/tests/setupFiles/server.ts',
    ],
    coverage: {
      provider: 'v8',
      include: ['src/**'],
    },
  },
});