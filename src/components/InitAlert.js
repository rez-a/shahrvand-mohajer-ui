import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalLayout from './shared/modal/ModalLayout';

const InitAlert = (props) => {
  const [show, setShow] = useState(true);
  return (
    <div
      className={` flex items-center justify-center top-0 left-0 right-0 z-40 w-full  overflow-x-hidden overflow-y-auto inset-0 h-full bg-black/10 backdrop-blur-sm ${
        show ? 'fixed' : 'hidden'
      }`}
    >
      <div className="bg-white max-w-lg p-3 py-5 rounded-md text-center">
        <p className=" font-bold leading-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
          با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
          و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
          کاربردی می باشد.
        </p>
        <button
          onClick={() => setShow(false)}
          className="bg-sky-500/90 mt-4  text-white p-2 px-4 text-sm rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300"
        >
          متوجه شدم
        </button>
      </div>
    </div>
  );
};

InitAlert.propTypes = {};

export default InitAlert;
