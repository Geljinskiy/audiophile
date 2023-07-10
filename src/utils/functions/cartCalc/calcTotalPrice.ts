export type CartItemPrices = {
  productPrice: number;
  productQuantity: number;
};

const calcTotalPrice = (cart: CartItemPrices[]): number => {
  const reducer = cart.reduce(
    (
      acc: number,
      curPrice: { productPrice: number; productQuantity: number }
    ) => {
      return acc + curPrice.productPrice * curPrice.productQuantity;
    },
    0
  );
  return Math.round(reducer * 100) / 100;
};

export default calcTotalPrice;
