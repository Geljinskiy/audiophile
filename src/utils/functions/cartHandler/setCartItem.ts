import { CartItem } from 'utils';

const setCartItem = (item: CartItem) => {
  const prevCart = localStorage.getItem('cart');

  if (!prevCart) {
    return localStorage.setItem('cart', JSON.stringify([item]));
  }

  const parsedCart = JSON.parse(prevCart) as CartItem[];

  const duplCheck = parsedCart.find((el: CartItem) => el.name === item.name);

  if (!duplCheck) {
    return localStorage.setItem('cart', JSON.stringify([...parsedCart, item]));
  }

  if (!item.quantity) {
    return localStorage.setItem(
      'cart',
      JSON.stringify(parsedCart.filter(prev => item.name !== prev.name))
    );
  }

  duplCheck.quantity = item.quantity;

  return localStorage.setItem('cart', JSON.stringify(parsedCart));
};

export default setCartItem;
