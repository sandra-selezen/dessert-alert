export const ENABLE_LOADING_DEMO = process.env.NODE_ENV === 'development';
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface IStoredCartItem {
  itemId: number;
  quantity: number;
}

export const getCartCount = () => {
  if (typeof window === 'undefined') return 0;

  const cart = JSON.parse(localStorage.getItem('cart') || '[]') as IStoredCartItem[];

  return cart.reduce((total, item) => total + item.quantity, 0);
};
