import { boot } from 'quasar/wrappers';
import HTTPSvc from 'services/http';
import CategoriesSvc from 'services/categories';

const httpSvc = new HTTPSvc();

const svc = {
  http: httpSvc,
  categories: new CategoriesSvc(httpSvc, process.env.API_BASE_URL),
};

export default boot(({ app }) => {
  app.config.globalProperties.$svc = svc;
  // ^ ^ ^ this will allow you to use this.$svc
});

export { httpSvc, svc };
