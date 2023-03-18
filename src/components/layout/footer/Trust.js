import React from 'react';
import PropTypes from 'prop-types';
import samandehi from 'assets/images/samandehi.png';
import enemad from 'assets/images/enemad.png';

const Trust = () => {
  return (
    <div className="flex gap-8 p-8 justify-between">
      <div className="w-3/5">
        <h2 className="font-bold mb-3">
          فروشگاه اینترنتی تاپ کالا، بررسی، انتخاب و خرید آنلاین
        </h2>
        <p className="text-sm text-zinc-500 leading-6">
          تاپ کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با
          بیش از یک دهه تجربه، با پایبندی به سه اصل کلیدی، پرداخت در
          محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا، موفق شده
          تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه
          اینترنتی ایران تبدیل شود. به محض ورود به تاپ کالا با یک سایت
          پر از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و به ذهن
          شما خطور می‌کند در اینجا پیدا خواهید کرد.
        </p>
      </div>
      <div className="flex gap-4">
        <div className="w-40 h-40 bg-zinc-100 border p-4 rounded">
          <img src={samandehi} alt="samandehi" />
        </div>
        <div className="w-40 h-40 bg-zinc-100 border p-4 rounded">
          <img src={enemad} alt="enemad" />
        </div>
      </div>
    </div>
  );
};

Trust.propTypes = {};

export default Trust;
