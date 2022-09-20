import React from "react";
import { useDispatch } from "react-redux";
import { getDataActions } from "../../store/extData";
import { SecBtn } from "../style/Button";
import { BottomWrapper } from "../style/Elements";

const Edit = () => {
  const dispatch = useDispatch();

  const editDeadlineHandler = () => {
    dispatch(getDataActions.setFlag());
  };
  return (
    <BottomWrapper>
      <SecBtn onClick={editDeadlineHandler}>Edit Deadline</SecBtn>
      <SecBtn>Edit Name</SecBtn>
    </BottomWrapper>
  );
};

export default Edit;
