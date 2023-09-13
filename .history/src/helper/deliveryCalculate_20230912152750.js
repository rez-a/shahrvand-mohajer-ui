import { object } from 'prop-types';
import { fetcher } from 'services/swr/fetcher';
import { STEPWISE_COST } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import useSWR from 'swr';

const deliveryCalculate = (
  orderPrice,
) => {
  const { data } = useSWR(`${STEPWISE_COST}/${orderPrice}`, fetcher);
};

export default deliveryCalculate;
