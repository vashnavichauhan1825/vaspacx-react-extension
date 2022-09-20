import React from "react";
import { CenterWrapper, EffectButton, InputName } from "../components";
import { useDispatch } from "react-redux";
import { getDataActions } from "../store/extData";

const WelcomePage = () => {
  const dispatch = useDispatch();

  const nameHandler = (value) => {
    const name = value;
    dispatch(getDataActions.updateName(name));
  };

  const setNameHandler = () => {
    dispatch(getDataActions.setName());
  };
  return (
    <CenterWrapper
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <h1>Hello 🙋‍♀️, your Name ?</h1>
      <div>
        <InputName
          type="text"
          placeholder="write your name here..."
          onChange={(event) => nameHandler(event.target.value)}
        />
        <EffectButton onClick={setNameHandler}>
          <i class="fa fa-chevron-right" aria-hidden="true">
            Go !
          </i>
        </EffectButton>
      </div>
    </CenterWrapper>
  );
};

export default WelcomePage;
