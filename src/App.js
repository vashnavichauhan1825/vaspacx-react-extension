import { BgWrapper, GlobalStyle } from "./components";
import MainPage from "./page/MainPage";
import WelcomePage from "./page/WelcomePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BgWrapper>
        {/* <WelcomePage /> */}
        <MainPage />
      </BgWrapper>
    </>
  );
}

export default App;
