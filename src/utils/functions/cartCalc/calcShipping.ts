type CalcShippingParams = {
  shippingPerc: number;
  totalQuant: number;
};

const CalcShipping = ({
  shippingPerc,
  totalQuant,
}: CalcShippingParams): number => {
  return shippingPerc * totalQuant;
};

export default CalcShipping;
