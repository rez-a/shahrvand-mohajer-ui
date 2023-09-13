import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from 'pages/Cart';
import Checkout from 'pages/Checkout';
import { CostContext } from 'contexts/CostProvider';
import { useContext } from 'react';
import { CartContext } from 'contexts/CartProvider';
import getTotalPrice from 'helper/getTotalPrice';
import { useState } from 'react';
import { useEffect } from 'react';
import { NORMAL, TAXI } from 'constants/shippingMethod';
import deliveryCalculate from 'helper/deliveryCalculate';
import { HOME_DELIVERY } from 'constants/paymentMethod';
import summaryCart from 'helper/summaryCart';
import Invoice from 'pages/Invoice';
import { STEPWISE_COST } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';

const CheckoutRoutes = (props) => {
  const {
    state: { cart },
  } = useContext(CartContext);
  const {
    min_order_amount,
    taxiـfare,
  } = useContext(CostContext);

  const [totalPrice, setTotalPrice] = useState(0);
  const [invoice, setInvoice] = useState(null);
  const [purchaseProfit, setPurchaseProfit] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [productsInCart, setProductInCart] = useState(
    cart.reduce(
      (totalProducts, vendor) =>
        totalProducts + vendor.products.length,
      0
    )
  );
  const [order, setOrder] = useState({
    address: {},
    payMethod: HOME_DELIVERY,
    shipping: NORMAL,
    suggest: 1,
    products: summaryCart(cart),
  });

  useEffect(() => {
    setTotalPrice(getTotalPrice(cart));
    setProductInCart(
      cart.reduce(
        (totalProducts, vendor) =>
          totalProducts + vendor.products.length,
        0
      )
    );

    const getStepwiseCost = async (totalPrice) => {
      setDeliveryCost(2000000)
      // try {
      //   const response = await fetcher(`${STEPWISE_COST}/${Number(totalPrice)}`);
      //   setDeliveryCost(Number(20000000))
      // } catch (err) {
      //   // setDeliveryCost(0)
      // }
    };

    setPurchaseProfit(
      cart.reduce(
        (total, vendor) =>
          total +
          vendor.products.reduce(
            (subTotal, product) =>
              subTotal + product.SellPrice * product.quantity,
            0
          ),
        0
      ) - getTotalPrice(cart)
    );
    setOrder({ ...order, products: summaryCart(cart) });
  }, [cart]);

  useEffect(() => {
    console.log(order.shipping);
      order.shipping === TAXI
        ? setDeliveryCost(Number(taxiـfare))
        : getStepwiseCost(Number(totalPrice))
  }, [totalPrice]);

  return (
    <>
      <Routes>
        <Route
          path="cart"
          element={
            <Cart
              data={{
                totalPrice,
                deliveryCost,
                min_order_amount,
                productsInCart,
                purchaseProfit,
              }}
            />
          }
        />
        <Route
          path="shipping"
          element={
            <Checkout
              data={{
                totalPrice,
                deliveryCost,
                min_order_amount,
                productsInCart,
                purchaseProfit,
                taxiـfare,
                order,
                setOrder,
                setInvoice,
              }}
            />
          }
        />
        <Route
          path="invoice"
          element={
            <Invoice invoice={invoice} setInvoice={setInvoice} />
          }
        />
      </Routes>
    </>
  );
};

CheckoutRoutes.propTypes = {};

export default CheckoutRoutes;
