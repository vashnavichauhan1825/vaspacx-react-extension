import React, { useRef, useState, useEffect } from "react";
import { ColumnWrap, CountDownWrapper } from "./style/Elements";

const SpecialCountdown = (props) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSrconds] = useState("00");
  const { date, year, month } = JSON.parse(localStorage.getItem("date"));
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(
      `${month} ${date} ${year} 00:00:00`
    ).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSrconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <CountDownWrapper>
      <ColumnWrap>
        <span>{timerDays}</span>
        <span>
          <p>Days</p>
        </span>
      </ColumnWrap>
      <small>:</small>
      <ColumnWrap>
        <span>{timerHours}</span>
        <span>
          <p>Hours</p>
        </span>
      </ColumnWrap>
      <small>:</small>
      <ColumnWrap>
        <span>{timerMinutes}</span>
        <span>
          <p>Min</p>
        </span>
      </ColumnWrap>
      <small>:</small>
      <ColumnWrap>
        <span>{timerSeconds}</span>
        <span>
          <p>Sec</p>
        </span>
      </ColumnWrap>
    </CountDownWrapper>
  );
};

export default SpecialCountdown;
