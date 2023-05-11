import React from 'react';
import PropTypes from 'prop-types';
import contactUs from 'assets/images/services/contact-us.svg';
import delivery from 'assets/images/services/delivery.svg';
import originGuarantee from 'assets/images/services/origin-guarantee.svg';
import paymentTerms from 'assets/images/services/payment-terms.svg';
import returnPolicy from 'assets/images/services/return-policy.svg';

const Services = (props) => {
  return (
    <ul className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 ">
      <li>
        <div className="w-16 h-16 mx-auto">
          <img
            className="object-contain"
            src={delivery}
            alt="تحویل فوری"
          />
        </div>
        <p className="text-center my-2 text-sm text-zinc-500">
          تحویل فوری
        </p>
      </li>
      <li>
        <div className="w-16 h-16 mx-auto">
          <img
            className="object-contain"
            src={contactUs}
            alt="پشتیبانی 24 ساعته"
          />
        </div>
        <p className="text-center my-2 text-sm text-zinc-500">
          پشتیبانی 24 ساعته
        </p>
      </li>
      <li>
        <div className="w-16 h-16 mx-auto">
          <img
            className="object-contain"
            src={paymentTerms}
            alt="پرداخت درمحل"
          />
        </div>
        <p className="text-center my-2 text-sm text-zinc-500">
          پرداخت درمحل
        </p>
      </li>
      <li>
        <div className="w-16 h-16 mx-auto">
          <img
            className="object-contain"
            src={returnPolicy}
            alt="۷ روز ضمانت بازگشت"
          />
        </div>
        <p className="text-center my-2 text-sm text-zinc-500">
          ۷ روز ضمانت بازگشت
        </p>
      </li>
      <li>
        <div className="w-16 h-16 mx-auto">
          <img
            className="object-contain"
            src={originGuarantee}
            alt="ضمانت اصل بودن کالا"
          />
        </div>
        <p className="text-center my-2 text-sm text-zinc-500">
          ضمانت اصل بودن کالا
        </p>
      </li>
    </ul>
  );
};

Services.propTypes = {};

export default Services;
