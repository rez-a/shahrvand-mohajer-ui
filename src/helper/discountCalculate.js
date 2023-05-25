const discountCalculate = (total, part) => {
  return Math.floor((part / total) * 100);
};

export default discountCalculate;
