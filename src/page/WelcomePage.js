import React from "react";
import { CenterWrapper, EffectButton, InputName } from "../components";
import { useDispatch } from "react-redux";
import { getDataActions } from "../store/extData";
import Title from "../components/documentTitle/Title";

const WelcomePage = () => {
  const dispatch = useDispatch();
  let InputValue = "";
  const nameHandler = (value) => {
    InputValue = value;
  };
  Title("Welcome");
  const setNameHandler = () => {
    dispatch(getDataActions.updateName(InputValue));
    dispatch(getDataActions.setName());
  };
  return (
    <CenterWrapper
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <h1>Hello 🙋‍♀️, your Name ?</h1>
      <form>
        <InputName
          type="text"
          placeholder="write your name here..."
          required
          onChange={(event) => nameHandler(event.target.value)}
        />
        <EffectButton onClick={setNameHandler}>
          <i class="fa fa-chevron-right" aria-hidden="true">
            Go !
          </i>
        </EffectButton>
      </form>
    </CenterWrapper>
  );
};

export default WelcomePage;
