import React, { useEffect, useState } from 'react';

const Timer = (props) => {
  const {
    initialMinute = 0,
    initialSeconds = 0,
    sendVerifyCode,
  } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const resendVerifyCode = () => {
    sendVerifyCode();
    setMinutes(2);
    setSeconds(0);
  };

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <button
          type="button"
          onClick={resendVerifyCode}
          className="text-xs text-rose-500 hover:underline"
        >
          <p>ارسال مجدد کد</p>
        </button>
      ) : (
        <p className="text-xs text-sky-600">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      )}
    </div>
  );
};

export default Timer;
