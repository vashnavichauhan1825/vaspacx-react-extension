import { useEffect } from "react";

const Title = (title) => {
  useEffect(() => {
    document.title = `Vaspacx Chrome | ${title}`;
  }, [title]);
};

export default Title;
