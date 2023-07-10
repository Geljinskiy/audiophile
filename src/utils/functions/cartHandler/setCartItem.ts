import { CartItem } from 'utils';

const setCartItem = (item: CartItem) => {
  const prevCart = localStorage.getItem('cart');

  if (!prevCart) {
    return localStorage.setItem('cart', JSON.stringify([item]));
  }

  const parsedCart = JSON.parse(prevCart) as CartItem[];

  const duplCheck = parsedCart.find(
    (el: CartItem) => el.productName === item.productName
  );

  if (!duplCheck) {
    return localStorage.setItem('cart', JSON.stringify([...parsedCart, item]));
  }

  if (!item.productQuantity) {
    return localStorage.setItem(
      'cart',
      JSON.stringify(
        parsedCart.filter(prev => item.productName !== prev.productName)
      )
    );
  }

  duplCheck.productQuantity = item.productQuantity;

  return localStorage.setItem('cart', JSON.stringify(parsedCart));
};

export default setCartItem;
