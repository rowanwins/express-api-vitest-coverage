import { describe, test, expect } from 'vitest';
import fetch from 'node-fetch';

describe('Widgets', async () => {
  test('Get All Widgets', async () => {
    const response = await fetch('http://localhost:1234/widgets');
    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
  });
});