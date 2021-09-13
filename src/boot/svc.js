import { boot } from 'quasar/wrappers';
import HTTPSvc from 'services/http';
import HTTPAuthSvc from 'services/http_auth';
import CategoriesSvc from 'services/categories';
import SellerSvc from 'services/seller';
import AuthSvc from 'services/auth';

const httpSvc = new HTTPSvc();
const httpAuthSvc = new HTTPAuthSvc();

const svc = {
  http: httpSvc,
  http_auth: httpAuthSvc,
  categories: new CategoriesSvc(httpSvc, process.env.API_BASE_URL),
  seller: new SellerSvc(httpSvc, process.env.API_BASE_URL),
  auth: new AuthSvc(httpSvc, process.env.API_BASE_URL),
};

export default boot(({ app }) => {
  app.config.globalProperties.$svc = svc;
  // ^ ^ ^ this will allow you to use this.$svc
});

export { httpSvc, httpAuthSvc, svc };
