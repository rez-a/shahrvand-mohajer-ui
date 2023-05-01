import { useEffect } from 'react';
import { useState } from 'react';

const useProductInCart = (cart, cartId, vendorErpCode) => {
  const [productInCart, setProductInCart] = useState(null);
  useEffect(() => {
    const vendor = cart.find(
      (vendor) => vendor.vendorErpCode === vendorErpCode
    );
    setProductInCart(
      vendor?.products.find((product) => product.cartId === cartId)
    );
  }, [cart, cartId]);

  return { productInCart };
};

export default useProductInCart;
