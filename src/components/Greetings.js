import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataActions } from "../store/extData";

const Greetings = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.extData.greetings);
  const name = localStorage.getItem("name");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 4) dispatch(getDataActions.setGreetings("Good Night"));
    else if (hour < 11) dispatch(getDataActions.setGreetings("Good Morning"));
    else if (hour < 16) dispatch(getDataActions.setGreetings("Good Afternoon"));
    else if (hour < 19) dispatch(getDataActions.setGreetings("Good Evening"));
    else dispatch(getDataActions.setGreetings("Good Night"));
  }, []);

  return (
    <h1>
      {greeting},{name}
    </h1>
  );
};
export default Greetings;
