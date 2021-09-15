export default class SellerProductsSvc {
  constructor(httpSvc, apiBaseURL) {
    this.httpSvc = httpSvc;
    this.apiBaseURL = apiBaseURL;
  }

  /*
  Get seller products
  */
  async getSellerProducts() {
    return this.httpSvc.get(`${this.apiBaseURL}/api/v1/seller_products/my/`);
  }

  /*
  Get seller product
  */
  async getSellerProduct(productID) {
    return this.httpSvc.get(`${this.apiBaseURL}/api/v1/seller_products/my/${productID}`);
  }

  /*
  Create seller product
  */
  async createSellerProduct(productData) {
    return this.httpSvc.post(`${this.apiBaseURL}/api/v1/sellers/settings/my/`, productData);
  }

  /*
  Update seller product
  */
  async updateSellerProduct(productID, productData) {
    return this.httpSvc.put(`${this.apiBaseURL}/api/v1/sellers/settings/my/${productID}`, productData);
  }

  /*
  Delete seller product
  */
  async deleteSellerProduct(productID) {
    return this.httpSvc.delete(`${this.apiBaseURL}/api/v1/sellers/settings/my/${productID}`);
  }
}
