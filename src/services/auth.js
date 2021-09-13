import store from 'src/store/index';

export default class AuthSvc {
  constructor(httpSvc, apiBaseURL) {
    this.httpSvc = httpSvc;
    this.apiBaseURL = apiBaseURL;
  }

  /*
  Authentication by email or phone
  */
  async auth(data) {
    const response = this.httpSvc.post(`${this.apiBaseURL}/api/v1/auth/jwt/grant`, data);
    if (response.status === 'OK') {
      store.commit('saveToken', response);
    }
    return response;
  }

  /*
  Refresh tokens
  */
  async refresh(data) {
    const response = this.httpSvc.post(`${this.apiBaseURL}/api/v1/auth/jwt/grant`, data);
    if (response.status === 'OK') {
      store.commit('saveToken', response);
    }
    return response;
  }
}
