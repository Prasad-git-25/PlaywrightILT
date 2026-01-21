

import { test, expect } from '../api_Fixtures/TodoApiFixture.js';

test.describe('API Testing - Todos', () => {
  test('@get Fetch records', async ({ todoApi }) => {
    const response = await todoApi.getById(1);
    expect(response.status()).toBe(200);
    console.log(response.status());
    const body = await response.json();
    expect(body.id).toBe(1);
  });

  test('@post add records', async ({ todoApi }) => {
    const response = await todoApi.create({
      userId: 1,
      title: 'adding record',
      completed: false,
    });
    expect([200, 201]).toContain(response.status());
    const body = await response.json();
    console.log(response.status());
    expect(body.title).toBe('adding record');
  });
});
