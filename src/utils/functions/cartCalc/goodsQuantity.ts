type CartItemPrices = {
  productPrice: number;
};

const CalcShipping = (cart: CartItemPrices[]): number => {
  return cart.reduce((acc: number, current: { productPrice: number }) => {
    return acc + current.productPrice;
  }, 0);
};

export default CalcShipping;
