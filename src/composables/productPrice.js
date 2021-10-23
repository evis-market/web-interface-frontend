import { ref } from 'vue';

export default function getProductPrice(product) {
  if (product.price_by_request) {
    return { productPrice: ref('Pricing available upon request') };
  }
  if (product.price_per_month) {
    return { productPrice: ref(`$${product.price_per_month} / month`) };
  }
  if (product.price_per_year) {
    return { productPrice: ref(`$${product.price_per_year} / year`) };
  }
  if (product.price_one_time) {
    return { productPrice: ref(`$${product.price_one_time} / one time`) };
  }
  return { productPrice: ref('$0 / month') };
}
