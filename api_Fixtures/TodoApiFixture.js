

const { test: base, expect, request: requestFactory } = require('@playwright/test');
const { TodoApi } = require('../api/TodoApi');

const test = base.extend({
  api: async ({ baseURL }, use) => {
    const api = await requestFactory.newContext({
      baseURL: process.env.BASE_URL || baseURL || 'https://jsonplaceholder.typicode.com',
      extraHTTPHeaders: { 'Content-Type': 'application/json' },
      ignoreHTTPSErrors: true,
      
    });
    await use(api);
    await api.dispose();
  },
  todoApi: async ({ api }, use) => {
    await use(new TodoApi(api));
  },
});

module.exports = { test, expect };
