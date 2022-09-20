import { TimeWrapper } from "./style/Elements";

const Time = () => {
  const getime = () => {
    return (
      new Date()
        .getHours()
        .toLocaleString("en-US", { minimumIntegerDigits: 2 }) +
      ":" +
      new Date()
        .getMinutes()
        .toLocaleString("en-US", { minimumIntegerDigits: 2 })
    );
  };
  return <TimeWrapper>{getime()}</TimeWrapper>;
};

export default Time;
