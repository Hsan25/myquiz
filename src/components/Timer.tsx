/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";

const Timer = ({
  targetTime,
  fn: handleTimesUp,
}: {
  targetTime: number;
  fn: () => void;
}): React.ReactElement => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetTime);
      setTimeLeft(newTimeLeft);
      if (newTimeLeft.total <= 0) {
        handleTimesUp();
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetTime, handleTimesUp]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex-col gap-5 items-center">
      <div className="flex gap-5 justify-center">
        <p>Timer :</p>
        <p>
          {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </p>
      </div>
      <p className="text-yellow-300"> note : do not leave this page otherwise you will repeat it.</p>
    </div>
  );
};

const calculateTimeLeft = (targetTime: number) => {
  const now = new Date().getTime();
  const difference = targetTime - now;

  if (difference <= 0) {
    return { total: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return { total: difference, hours, minutes, seconds };
};

export default Timer;
