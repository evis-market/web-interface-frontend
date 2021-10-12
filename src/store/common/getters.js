export function allCategories(state) {
  return state.allCategories;
}

export function getMainCategories(state) {
  return state.allCategories.filter((category) => category.parent_id === null);
}

export function token(state) {
  const { accessToken, refreshToken, tokenType } = state;
  if (accessToken && refreshToken && tokenType) {
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      token_type: tokenType,
    };
  }
  return null;
}

export function isLoggedIn(state) {
  return !!state.accessToken;
}

export function visibleProducts(state) {
  return state.visibleProducts;
}
