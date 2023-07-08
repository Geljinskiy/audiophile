type CalcVATParams = {
  taxRate: number;
  taxableAmount: number;
};

const calcVAT = ({ taxRate, taxableAmount }: CalcVATParams): number => {
  const vat = taxableAmount * taxRate;
  return Math.round(vat * 100) / 100;
};

export default calcVAT;
