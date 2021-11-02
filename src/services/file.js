export default class FileSvc {
  constructor(httpSvc, apiBaseURL) {
    this.httpSvc = httpSvc;
    this.apiBaseURL = apiBaseURL;
  }

  /*
  Get File
  */
  async get(uuid) {
    return this.httpSvc.get(`${this.apiBaseURL}/api/v1/upload/${uuid}`);
  }

  /*
  Upload File
  */
  async upload(formData) {
    return this.httpSvc.post(`${this.apiBaseURL}/api/v1/upload/`, formData);
  }
}
