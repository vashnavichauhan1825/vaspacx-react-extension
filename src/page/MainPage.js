import React from "react";
import { useSelector } from "react-redux";
import { DateContainer, DetailContainer } from "../components";
import Greetings from "../components/Greetings";
import Time from "../components/Time";

const MainPage = () => {
  const name = useSelector((state) => state.extData.name);
  const getDate = () => {
    return new Date().toDateString();
  };

  return (
    <DetailContainer data-aos="zoom-in">
      <span>
        <Greetings />
      </span>

      <Time />
      <DateContainer>{getDate()}</DateContainer>
    </DetailContainer>
  );
};

export default MainPage;
