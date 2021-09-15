export function allCategories(state) {
  return state.allCategories;
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
