export default class ShopSvc {
  constructor(httpSvc, apiBaseURL) {
    this.httpSvc = httpSvc;
    this.apiBaseURL = apiBaseURL;
  }

  /*
  List not empty categories
  */
  async listNotEmptyCategories() {
    return this.httpSvc.get(`${this.apiBaseURL}/api/v1/shop/categories/`);
  }

  /*
  List category products
  */
  async listCategoryProducts(data) {
    const params = {
      offset: data.offset || 0,
      limit: data.limit || 20,
      order_by: data.orderBy || 'name',
    };
    if (data.categoryIDs) {
      params.category_ids = data.categoryIDs;
    }
    if (data.productName) {
      params.name = data.productName;
    }
    return this.httpSvc.get(`${this.apiBaseURL}/api/v1/shop/products/`, { params });
  }

  /*
  Get filter options
  */
  async getFilterOptions(categoryID) {
    return this.httpSvc.get(`${this.apiBaseURL}/api/v1/shop/filter_options/`, {
      params: {
        category_id: categoryID,
      },
    });
  }

  /*
  Get product detailed information
  */
  async getProductDetailedInfo(sellerProductID, relatedProductsLimit = 20) {
    return this.httpSvc.get(`${this.apiBaseURL}/api/v1/shop/product/${sellerProductID}`, {
      params: {
        related_products_limit: relatedProductsLimit,
      },
    });
  }

  /*
  Get related products
  */
  async getRelatedProducts(sellerProductID) {
    return this.httpSvc.get(`${this.apiBaseURL}/api/v1/shop/related_products/${sellerProductID}`);
  }

  /*
  Get all options
  */
  async getAllOptions() {
    return this.httpSvc.get(`${this.apiBaseURL}/api/v1/shop/all_options`);
  }
}
