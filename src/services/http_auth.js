import axios from 'axios';
import store from 'src/store/index';
import HTTPSvc from 'services/http';
import AuthSvc from 'src/services/auth';

export default class HTTPAuthSvc extends HTTPSvc {
  constructor() {
    super();
    this.authSvc = new AuthSvc(new HTTPSvc(), process.env.API_BASE_URL);
    this.httpAuthSvc = axios.create({});
    this.setRequestInterceptor();
    this.setResponseInterceptor();
  }

  setRequestInterceptor() {
    this.httpAuthSvc.interceptors.request.use(
      (config) => {
        const token = store().getters['common/token'];
        if (token) {
          config.headers.Authorization = `${token.token_type} ${token.access_token}`;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );
  }

  setResponseInterceptor() {
    this.httpAuthSvc.interceptors.response.use(
      (response) => response,
      (error) => {
        const token = store().getters['common/token'];
        if (error.response.status === 401) {
          this.authSvc.refresh({
            grant_type: 'refresh_token',
            refresh_token: token.refresh_token,
          });
        }
        return Promise.reject(error);
      },
    );
  }

  /*
  Makes an HTTP request with a token in the Authorization header
  */
  async request(url, config) {
    if (!config) {
      config = {};
    }
    let res = {};
    await this.httpAuthSvc.request(url, config)
      .then((response) => {
        res = response.data;
      })
      .catch((err) => {
        res = this.processError(err);
      });
    return res;
  }
}
