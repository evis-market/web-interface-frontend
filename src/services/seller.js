export default class SellerSvc {
  constructor(httpSvc, apiBaseURL) {
    this.httpSvc = httpSvc;
    this.apiBaseURL = apiBaseURL;
    this.ContactTypeIDSite = 1;
    this.ContactTypeIDPhone = 2;
    this.ContactTypeIDEmail = 3;
  }

  /*
  Get seller settings
  */
  async getSettings() {
    return this.httpSvc.get(`${this.apiBaseURL}/api/v1/sellers/settings/my/`);
  }

  /*
  Update seller settings
  */
  async updateSettings(data) {
    return this.httpSvc.put(`${this.apiBaseURL}/api/v1/sellers/settings/my/`, data);
  }
}
