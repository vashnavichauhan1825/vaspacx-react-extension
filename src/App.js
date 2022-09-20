import { useSelector } from "react-redux";
import { BgWrapper, GlobalStyle } from "./components";
import MainPage from "./page/MainPage";
import WelcomePage from "./page/WelcomePage";

function App() {
  const name = useSelector((state) => state.extData.name);
  return (
    <>
      <GlobalStyle />
      <BgWrapper>{name ? <MainPage /> : <WelcomePage />}</BgWrapper>
    </>
  );
}

export default App;
