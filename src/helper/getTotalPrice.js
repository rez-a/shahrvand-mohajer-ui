const getTotalPrice = (cart) => {
  const totalPrice = cart.reduce(
    (total, vendor) =>
      total +
      vendor.products.reduce(
        (subTotal, product) =>
          subTotal + product.LastBuyPrice * product.quantity,
        0
      ),
    0
  );

  return totalPrice;
};

export default getTotalPrice;
