import Toast from 'utilities/sweetAlert';

const cartSummaryCalculator = (cart) => {
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

  const totalCount = cart.reduce(
    (totalProducts, vendor) => totalProducts + vendor.products.length,
    0
  );

  Toast.fire({
    icon: 'info',
    title: `${totalCount} کالا در سبد شما وجود دارد`,
    text: `مجموع : ${totalPrice.toLocaleString()} تومان`,
  });
};

export default cartSummaryCalculator;
