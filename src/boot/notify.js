import { Notify } from 'quasar';
import { boot } from 'quasar/wrappers';

const notify = {
  error(message) {
    Notify.create({
      message,
      icon: 'error',
      position: 'bottom',
      timeout: 2000,
      color: 'negative',
      actions: [{ icon: 'close' }],
    });
  },
  success(message) {
    Notify.create({
      message,
      icon: 'thumb_up',
      position: 'bottom',
      timeout: 2000,
      color: 'positive',
      actions: [{ icon: 'close' }],
    });
  },
  info(message) {
    Notify.create({
      message,
      icon: 'info',
      position: 'bottom',
      timeout: 2000,
      color: 'info',
      actions: [{ icon: 'close' }],
    });
  },
};

export default boot(({ app }) => {
  app.config.globalProperties.$notify = notify;
});

export { notify };
