import { useEffect } from 'react';
import { useState } from 'react';

const useProductInCart = (cart, cartId, vendorErpCode) => {
  const [productInCart, setProductInCart] = useState(null);
  console.log(cart, cartId, vendorErpCode);
  useEffect(() => {
    const vendor = cart.find(
      (vendor) => vendor.vendorErpCode === vendorErpCode
    );
    console.log(vendor);
    setProductInCart(
      vendor?.products.find((product) => product.cartId === cartId)
    );
  }, [cart, cartId]);

  return { productInCart };
};

export default useProductInCart;
