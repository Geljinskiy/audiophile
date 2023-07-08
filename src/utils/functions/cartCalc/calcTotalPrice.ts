export type CartItemPrices = {
  price: number;
  quantity: number;
};

const calcTotalPrice = (cart: CartItemPrices[]): number => {
  const reducer = cart.reduce(
    (acc: number, curPrice: { price: number; quantity: number }) => {
      return acc + curPrice.price * curPrice.quantity;
    },
    0
  );
  return Math.round(reducer * 100) / 100;
};

export default calcTotalPrice;
