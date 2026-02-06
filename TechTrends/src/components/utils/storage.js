const CART_KEY = "cart";
const WISHLIST_KEY = "wishlist";

export const getCart = () =>
  JSON.parse(localStorage.getItem(CART_KEY)) || [];

export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));
};

export const getWishlist = () =>
  JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];

export const saveWishlist = (wishlist) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  window.dispatchEvent(new Event("wishlistUpdated"));
};

export const isInWishlist = (productId, variantId) => {
  const wishlist = getWishlist();
  return wishlist.some(
    (w) =>
      w.productId === productId &&
      w.variantId === variantId
  );
};
