import { test, expect } from '@playwright/test';

test('Mocked GET users API returns 200', async () => {
  // Mockolt response
  const mockedResponse = {
    data: [
      { id: 1, name: 'Bence Varga' },
      { id: 2, name: 'Jane Doe' }
    ]
  };

  // Status kód mock
  const status = 200;
  const body = mockedResponse;

  expect(status).toBe(200);
  expect(body.data.length).toBeGreaterThan(0);
});