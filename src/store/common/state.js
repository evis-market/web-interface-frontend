// eslint-disable-next-line func-names
export default function () {
  return {
    allCategories: [],
    dataDeliveryTypes: [],
    dataFormats: [],
    dataTypes: [],
    geoRegions: [],
    languages: [],
    visibleProducts: [],
    accessToken: localStorage.getItem('access_token') || '',
    refreshToken: localStorage.getItem('refresh_token') || '',
    tokenType: localStorage.getItem('token_type') || '',
  };
}
