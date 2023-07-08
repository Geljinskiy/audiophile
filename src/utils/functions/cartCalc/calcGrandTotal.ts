const calcGrandTotal = (values: number[]): number => {
  const reducer = values.reduce((acc: number, curPrice) => {
    return acc + curPrice;
  }, 0);

  return Math.round(reducer * 100) / 100;
};

export default calcGrandTotal;
