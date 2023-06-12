import React from 'react';
import Countdown from 'react-countdown';

const CurrentLottery = () => {
  const renderSingleDigitNumber = (number) =>
    number < 10 ? `0${number}` : number;
  const render = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <p className="text-rose-600 bg-rose-100 font-bold text-center p-8 rounded-xl">
          قرعه کشی کص خر به پایان رسید به زودی نتایج اعلان خواهد شد!!
        </p>
      );
    } else {
      return (
        <>
          <div className="flex justify-center gap-4">
            <div className="text-slate-700 bg-gray-100 w-28 h-28 text-4xl flex flex-col items-center justify-center rounded-xl">
              <p>{renderSingleDigitNumber(seconds)}</p>
              <p className="text-base">ثانیه</p>
            </div>
            <div className="text-slate-700 bg-gray-100 w-28 h-28 text-4xl flex flex-col items-center justify-center rounded-xl">
              <p>{renderSingleDigitNumber(minutes)}</p>
              <p className="text-base">دقیقه</p>
            </div>
            <div className="text-slate-700 bg-gray-100 w-28 h-28 text-4xl flex flex-col items-center justify-center rounded-xl">
              <p>{renderSingleDigitNumber(hours)}</p>
              <p className="text-base">ساعت</p>
            </div>
            <div className="text-slate-700 bg-gray-100 w-28 h-28 text-4xl flex flex-col items-center justify-center rounded-xl">
              <p>{renderSingleDigitNumber(days)}</p>
              <p className="text-base">روز</p>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <div className="p-20 bg-white">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-rose-600 font-bold text-center text-3xl mb-4">
            تا پایان قرعه کشی کص خر
          </h2>
          <p className="text-center">
            <span className="text-neutral-500">جایزه قرعه کشی :</span>
            <span className="text-black font-bold text-xl">
              یک بسته کاندوم
            </span>
          </p>
        </div>
        <Countdown
          className="text-4xl font-bold text-sky-500 mx-auto text-center w-full block"
          renderer={render}
          date={Date.now() + 1000}
        />
      </div>
    </div>
  );
};

export default CurrentLottery;
