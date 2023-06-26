type CartItemPrices = {
  quantity: number;
};

const CalcShipping = (cart: CartItemPrices[]): number => {
  return cart.reduce((acc: number, current: { quantity: number }) => {
    return acc + current.quantity;
  }, 0);
};

export default CalcShipping;
