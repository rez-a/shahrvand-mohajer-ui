import React from 'react';
import PropTypes from 'prop-types';
import Rate from './Rate';

const Rates = ({ rate }) => {
  const maxRates = [20, 40, 60, 80, 100];
  return (
    <div class="flex items-center">
      {maxRates?.map((maxRate, index) => (
        <Rate key={index} maxRate={maxRate} rate={rate} />
      ))}
    </div>
  );
};

Rates.propTypes = {
  rate: PropTypes.number,
};

export default Rates;
