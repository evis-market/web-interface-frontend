import axios from 'axios';
import store from 'src/store/index';
import HTTPSvc from 'services/http';
import AuthSvc from 'services/auth';

export default class HTTPAuthSvc extends HTTPSvc {
  constructor() {
    super();
    this.authSvc = new AuthSvc(new HTTPSvc(), process.env.API_BASE_URL);
    this.setRequestInterceptor();
    this.setResponseInterceptor();
  }

  setAuthHeader(config) {
    const token = store().getters['common/token'];
    if (token) {
      config.headers.Authorization = `${token.token_type} ${token.access_token}`;
    }
  }

  setRequestInterceptor() {
    this.httpSvc.interceptors.request.use(
      (config) => {
        this.setAuthHeader(config);
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );
  }

  setResponseInterceptor() {
    this.httpSvc.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401) {
          return this.authSvc.refresh({
            grant_type: 'refresh_token',
            refresh_token: store().getters['common/token'].refresh_token,
          }).then((res) => {
            if (res.status === 'OK') {
              store().commit('common/saveToken', res);
              this.setAuthHeader(error.config);
              return axios(error.config);
            }
          });
        }
        return Promise.reject(error);
      },
    );
  }
}
