type CalcVATParams = {
  taxRate: number;
  taxableAmount: number;
};

const calcVAT = ({ taxRate, taxableAmount }: CalcVATParams): number => {
  return parseFloat((taxableAmount * taxRate).toFixed(2));
};

export default calcVAT;
