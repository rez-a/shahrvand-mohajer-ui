const summaryCart = (cart) => {
  console.log(cart);
  const products = cart
    .map((vendor) => vendor.products)
    .flat()
    .map((product) => {
      return {
        erp_code: product.ErpCode,
        quantity: product.quantity,
        attr: product.Attr[0] || '',
      };
    });

  return products;
};

export default summaryCart;
