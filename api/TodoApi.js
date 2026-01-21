
export class TodoApi {
  constructor(api) {
    this.api = api;
  }

  getById(id) {
    return this.api.get(`/todos/${id}`);         // returns APIResponse
  }

  create(payload) {
    return this.api.post('/todos', { data: payload }); // returns APIResponse
  }

}