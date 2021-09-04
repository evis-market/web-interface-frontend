export default class CategoriesSvc {
  constructor(httpSvc, apiBaseURL) {
    this.httpSvc = httpSvc;
    this.apiBaseURL = apiBaseURL;
  }

  /**
   * list return categories list
   */
  async list(filters) {
    return this.httpSvc.get(`${this.apiBaseURL}/api/v1/categories/`, {
      params: {
        parent_id: filters.parent_id,
        name: filters.name,
      },
    });
  }
}
