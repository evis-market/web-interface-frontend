export function saveToken(state, token) {
  localStorage.setItem('access_token', token.access_token);
  localStorage.setItem('refresh_token', token.refresh_token);
  localStorage.setItem('token_type', token.token_type);
  state.accessToken = token.access_token;
  state.refreshToken = token.refresh_token;
  state.tokenType = token.token_type;
}

export function removeToken(state) {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('token_type');
  state.accessToken = '';
  state.refreshToken = '';
  state.tokenType = '';
}

export function saveAllOptions(state, options) {
  state.allCategories = options.categories;
  state.dataDeliveryTypes = options.data_delivery_types;
  state.dataFormats = options.data_formats;
  state.dataTypes = options.data_types;
  state.geoRegions = options.geo_regions;
  state.languages = options.languages;
}

export function setVisibleProducts(state, products) {
  state.visibleProducts = products;
}

export function openSignInForm(state) {
  state.isSignUpFormOpened = false;
  state.isSignInFormOpened = true;
  state.isAuthModalOpened = true;
}

export function openSignUpForm(state) {
  state.isSignUpFormOpened = true;
  state.isSignInFormOpened = false;
  state.isAuthModalOpened = true;
}

export function closeAuthDialog(state) {
  state.isSignUpFormOpened = false;
  state.isSignInFormOpened = false;
  state.isAuthModalOpened = false;
}
