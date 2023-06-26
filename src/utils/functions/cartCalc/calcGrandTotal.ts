const calcGrandTotal = (values: number[]): number => {
  return values.reduce((acc: number, curPrice) => {
    return acc + curPrice;
  }, 0);
};

export default calcGrandTotal;
