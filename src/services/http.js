import axios from 'axios';

export default class HTTPSvc {
  constructor() {
    this.httpSvc = axios.create({});
  }

  /*
  processHTTPError returns error message from http response.
  */
  processHTTPError(err) {
    if ('headers' in err.response
      && 'content-type' in err.response.headers
      && err.response.headers['content-type'].toLowerCase().includes('text/plain')) {
      return {
        code: err.response.status,
        msg: err.response.data,
      };
    }

    return {
      code: err.response.status,
      msg: err.response.statusText,
    };
  }

  /*
  processError returns error message in format with status field.
  */
  processError(err) {
    const res = {
      status: 'ERR',
      error: {
        code: -1,
        msg: 'Unknown error',
      },
    };

    if (!err) {
      return res;
    }

    // Browser level error, request was not send. For example: no connection, invalid URL etc.
    if (!('response' in err) || !err.response) {
      res.error.msg = err;
      return res;
    }

    if (!('headers' in err.response) || !('content-type' in err.response.headers)) {
      res.error = this.processHTTPError(err);
      return res;
    }

    if (!(err.response.headers['content-type'].toLowerCase().includes('application/json'))) {
      res.error = this.processHTTPError(err);
      return res;
    }

    if (!('data' in err.response) || typeof (err.response.data) !== 'object') {
      res.error = this.processHTTPError(err);
      return res;
    }

    // Current API error answer.
    if ('error' in err.response.data) {
      res.error = err.response.data.error;
      return res;
    }

    // Fallback, unexpected situation
    res.error.msg = err;
    return res;
  }

  /*
  Makes an HTTP request with a token in the Authorization header
  */
  async request(url, config) {
    if (!config) {
      config = {};
    }

    let res = {};

    await this.httpSvc.request(url, config)
      .then((response) => {
        res = response.data;
      })
      .catch((err) => {
        res = this.processError(err);
      });

    return res;
  }

  /*
  Makes HTTP request by GET method
  */
  async get(url, config) {
    if (!config) {
      config = {};
    }
    config.method = 'get';
    return this.request(url, config);
  }

  /*
  Makes HTTP request by POST method
  */
  async post(url, data, config) {
    if (!config) {
      config = {};
    }
    config.method = 'post';
    config.data = data;
    return this.request(url, config);
  }

  /*
  Makes HTTP request by PUT method
  */
  async put(url, data, config) {
    if (!config) {
      config = {};
    }
    config.method = 'put';
    config.data = data;
    return this.request(url, config);
  }

  /*
  Makes HTTP request by DELETE method
  */
  async delete(url, config) {
    if (!config) {
      config = {};
    }
    config.method = 'delete';
    return this.request(url, config);
  }
}
