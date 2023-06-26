export type CartItemPrices = {
  price: number;
  quantity: number;
};

const calcTotalPrice = (cart: CartItemPrices[]): number => {
  return cart.reduce(
    (acc: number, curPrice: { price: number; quantity: number }) => {
      return acc + curPrice.price * curPrice.quantity;
    },
    0
  );
};

export default calcTotalPrice;
