import { useEffect, useState } from "react";

import { getRemainingTimeUntilMsTimestamp } from "../Utils/CountdownTimerUtils";

import "./CountdownTimer.css";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="countdown-timer">
      <span>{remainingTime.days}</span>
      <span>Days</span>
      <span className="two-number">{remainingTime.hours}</span>
      <span>Hours</span>
      <span className="two-number">{remainingTime.minutes}</span>
      <span>Minutes</span>
      <span className="two-number">{remainingTime.seconds}</span>
      <span>Seconds</span>
    </div>
  );
};

export default CountdownTimer;
