import { Dialog } from 'quasar';
import { boot } from 'quasar/wrappers';

const dialog = {
  success(message, title) {
    if (!title) title = 'Notification';
    return Dialog.create({
      title,
      message,
      ok: 'ОК',
    });
  },
  error(message, title) {
    if (!title) title = 'Error';
    return Dialog.create({
      title,
      message,
      ok: 'ОК',
    });
  },
  confirm(message, title) {
    if (!title) title = 'Confirm action';
    if (!message) message = 'Are you sure?';
    return Dialog.create({
      title,
      color: 'primary',
      message,
      ok: 'Yes',
      cancel: 'No',
      'no-esc-dismiss': true,
      'no-backdrop-dismiss': true,
    });
  },
};

export default boot(({ app }) => {
  app.config.globalProperties.$dialog = dialog;
});

export { dialog };
