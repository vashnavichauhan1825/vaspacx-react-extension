import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CenterWrapper,
  InputName,
  EffectButton,
  DateContainer,
  DetailContainer,
} from "../components";
import SpecialCountdown from "../components/CountDown";
import Edit from "../components/edit/Edit";
import Greetings from "../components/Greetings";
import Time from "../components/Time";
import Todo from "../components/todo/Todo";
import Weather from "../components/weather/Weather";
import { getDataActions } from "../store/extData";

const MainPage = () => {
  const dateValue = useSelector((state) => state.extData.dateStore.date);
  const monthValue = useSelector((state) => state.extData.dateStore.month);
  const yearValue = useSelector((state) => state.extData.dateStore.year);
  const flag = localStorage.getItem("flag");
  const dispatch = useDispatch();
  const getDate = () => {
    return new Date().toDateString();
  };

  const startDeadline = () => {
    if (dateValue) {
      const dateObj = { date: dateValue, month: monthValue, year: yearValue };
      localStorage.setItem("date", JSON.stringify(dateObj));
      dispatch(getDataActions.setFlag());
    }
  };

  const nameHandler = (value) => {
    const dateArr = value.split("-");
    dispatch(
      getDataActions.setDate({
        date: dateArr[2],
        month: dateArr[1],
        year: dateArr[0],
      })
    );
  };

  return (
    <>
      <DetailContainer>
        <span data-aos="zoom-in">
          <Greetings />
        </span>

        <Time />
        <DateContainer data-aos="fade-in">{getDate()}</DateContainer>
        {!flag && (
          <>
            <small>set deadline to acheive goal !</small>
            <form>
              <InputName
                type="date"
                onChange={(event) => nameHandler(event.target.value)}
                min="2022-09-30"
                required
              />
              <EffectButton onClick={startDeadline}>
                <i class="fa fa-chevron-right" aria-hidden="true">
                  Go !
                </i>
              </EffectButton>
            </form>
          </>
        )}
        <Weather />
        <Todo />
        {flag && <SpecialCountdown />}
      </DetailContainer>
      {flag && <Edit />}
    </>
  );
};

export default MainPage;
