import { object } from 'prop-types';

const deliveryCalculate = (
  orderPrice,
  minPrice,
  maxPriceDelivery,
  deliveryCost
) => {
  const deliveryKeys = Object.keys(deliveryCost);
  if (orderPrice >= minPrice) return 0;
  if (orderPrice / 1000 < Number(deliveryKeys[0]))
    return maxPriceDelivery;
  if (
    orderPrice / 1000 > Number(deliveryKeys.at(-1)) &&
    orderPrice < minPrice
  )
    return deliveryCost[deliveryKeys.at(-1)];

  for (let i = 0; i <= deliveryKeys.length - 1; i++) {
    if (
      deliveryKeys[i] <= orderPrice / 1000 &&
      orderPrice / 1000 < deliveryKeys[i + 1]
    ) {
      return deliveryCost[deliveryKeys[i]];
    }
  }
};

export default deliveryCalculate;
