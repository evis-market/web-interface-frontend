export function pushCategories(state, categories) {
  state.allCategories.push(...categories);
}

export function saveToken(state, token) {
  localStorage.setItem('access_token', token.access_token);
  localStorage.setItem('refresh_token', token.refresh_token);
  localStorage.setItem('token_type', token.token_type);
  state.accessToken = token.access_token;
  state.refreshToken = token.refresh_token;
  state.tokenType = token.token_type;
}
