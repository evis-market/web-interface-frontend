import store from 'src/store/index';

export default class AuthSvc {
  constructor(httpSvc, apiBaseURL) {
    this.httpSvc = httpSvc;
    this.apiBaseURL = apiBaseURL;
  }

  /*
  Authentication by email or phone
  */
  async grantTokenByPassword(login, password) {
    const response = await this.httpSvc.post(`${this.apiBaseURL}/api/v1/auth/jwt/grant`, {
      grant_type: 'password',
      login,
      password,
    });
    if (response.status === 'OK') {
      store().commit('common/saveToken', response);
    }
    return response;
  }

  /*
  Refresh tokens
  */
  async grantTokenByRefreshToken(refreshToken) {
    const response = await this.httpSvc.post(`${this.apiBaseURL}/api/v1/auth/jwt/grant`, {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    });
    if (response.status === 'OK') {
      store().commit('common/saveToken', response);
    }
    return response;
  }
}
