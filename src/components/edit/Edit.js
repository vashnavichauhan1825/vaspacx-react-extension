import React from "react";
import { useDispatch } from "react-redux";
import { getDataActions } from "../../store/extData";
import { SecBtn } from "../style/Button";
import { BottomWrapper } from "../style/Elements";

const Edit = () => {
  const dispatch = useDispatch();
  const name = localStorage.getItem("name");
  const editDeadlineHandler = () => {
    dispatch(getDataActions.setFlag());
  };

  const editNameHandler = () => {
    dispatch(getDataActions.updateName(""));
    localStorage.setItem("name", "");
  };
  return (
    <BottomWrapper>
      <SecBtn onClick={editDeadlineHandler}>Edit Deadline</SecBtn>
      {name !== "" && <SecBtn onClick={editNameHandler}>Edit Name</SecBtn>}
    </BottomWrapper>
  );
};

export default Edit;
