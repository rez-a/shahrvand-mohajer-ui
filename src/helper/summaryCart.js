const summaryCart = (cart) => {
  console.log(cart);
  const products = cart
    .map((vendor) => vendor.products)
    .flat()
    .map((product) => {
      return {
        erp_code: product.ErpCode,
        quantity:
          Number(product.quantity) / Number(product.MinUnitFew),
        attr: product.Attr[0] || '',
      };
    });

  return products;
};

export default summaryCart;
