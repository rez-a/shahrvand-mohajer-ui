const summaryCart = (cart) => {
  const products = cart
    .map((vendor) => vendor.products)
    .flat()
    .map((product) => {
      return {
        erp_code: product.ErpCode,
        quantity:
          Number(0.75),
        attr: product.Attr[0] || '',
      };
    });

  return products;
};

export default summaryCart;
