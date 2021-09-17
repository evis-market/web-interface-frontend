import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  app.mixin({
    methods: {
      errorCode(res) {
        if ('error' in res && 'code' in res.error) {
          return res.error.code;
        }
        return -1;
      },

      isError(res) {
        if (!res) {
          return false;
        }
        return res.status === 'ERR';
      },

      processError(res) {
        if (!this.isError(res)) {
          return false;
        }

        if (this.errorCode(res) !== 401) {
          this.$dialog.error(res.error.msg);
        }

        return true;
      },

      processErrorsArr(resArr) {
        if (!resArr?.length) {
          return false;
        }

        for (let i = 0; i < resArr.length; i += 1) {
          if (this.processError(resArr[i])) {
            return true;
          }
        }

        return false;
      },

      processErrorWithInvalidFields(res, fieldsValidator, formErrors) {
        if (!this.isError(res)) {
          return false;
        }

        if ('invalid_fields' in res) {
          fieldsValidator.setErrors(res.invalid_fields, formErrors);
        } else {
          this.$dialog.error(res.error.msg);
        }

        return true;
      },
    },
  });
});
