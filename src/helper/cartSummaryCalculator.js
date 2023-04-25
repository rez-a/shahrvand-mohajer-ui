import Toast from 'utilities/sweetAlert';
import getTotalPrice from './getTotalPrice';

const cartSummaryCalculator = (cart) => {
  const totalPrice = getTotalPrice(cart);

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
