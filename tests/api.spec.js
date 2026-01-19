
const { test, expect, request } = require('@playwright/test');

test('Simple GET request with baseURL', async () => {

  // Create custom API context with baseURL
  const apiContext = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
    ignoreHTTPSErrors: true  // <-- base URL here
  });

  // Send GET request using only the endpoint
  const response = await apiContext.get('/todos/1');  
  expect(response.status()).toBe(200);

  // Parse the body
  const data = await response.json();
  console.log(data);
});
