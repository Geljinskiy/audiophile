type CalcShippingParams = {
  shippingPerc: number;
  totalQuant: number;
};

const CalcShipping = ({
  shippingPerc,
  totalQuant,
}: CalcShippingParams): number => {
  return Math.round(shippingPerc * totalQuant * 100) / 100;
};

export default CalcShipping;
