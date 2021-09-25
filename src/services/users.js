export default class UsersSvc {
  constructor(httpSvc, httpAuthSvc, apiBaseURL) {
    this.httpSvc = httpSvc;
    this.httpAuthSvc = httpAuthSvc;
    this.apiBaseURL = apiBaseURL;
  }

  /*
  Sign up by email or phone
  */
  async signUpByEmailOrPhone(data) {
    return this.httpSvc.post(`${this.apiBaseURL}/api/v1/users/signup`, data);
  }

  /*
  Send confirmation email
  */
  async sendEmailConfirmation(email) {
    return this.httpSvc.post(`${this.apiBaseURL}/api/v1/users/send_email_confirmation`, { email });
  }

  /*
  Confirm email
  */
  async confirmEmail(email, secretCode) {
    return this.httpSvc.post(`${this.apiBaseURL}/api/v1/users/confirm_email`, {
      email,
      secret_code: secretCode,
    });
  }

  /*
  Reset password by email
  */
  async resetPasswordByEmail(email) {
    return this.httpSvc.post(`${this.apiBaseURL}/api/v1/users/send_reset_password_email`, { email });
  }

  /*
  Set password by secret code
  */
  async setPasswordBySecretCode(password, secretCode) {
    return this.httpSvc.post(`${this.apiBaseURL}/api/v1/users/set_password_by_secret_code`, {
      password,
      secret_code: secretCode,
    });
  }

  /*
  Get logged in user profile
  */
  async getLoggedInUserProfile() {
    return this.httpAuthSvc.get(`${this.apiBaseURL}/api/v1/users/my/profile`);
  }

  /*
  Update logged in user profile
  */
  async updateLoggedInUserProfile(data) {
    return this.httpAuthSvc.put(`${this.apiBaseURL}/api/v1/users/my/profile`, data);
  }

  /*
  Change logged in user password
  */
  async changeLoggedInUserPassword(password) {
    return this.httpAuthSvc.put(`${this.apiBaseURL}/api/v1/users/my/password`, { password });
  }
}
