import styled, { createGlobalStyle } from "styled-components";
import bgImg from "../../assests/bgImage.jpg";

export const GlobalStyle = createGlobalStyle`
body{
              margin: 0;
              font-family: 'Pacifico', cursive;
              --primary-color:#f5b0ec;
              --cta-color:#b85861;
              --grey-color:grey;
              --sec-color:#a64c9f;
}
@font-face {
    font-family: 'Pacifico', cursive;
    src: url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
}
`;
export const BgWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url(${bgImg});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.5rem;
  color: var(--primary-color);
  gap: 50px;
  height: 50%;
  width: 100%;
  justify-content: center;

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const UpperBox = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  width: 90%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const TodoWrapper = styled.div`
  margin: 5px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  color: var(--primary-color);
  gap: 20px;
  height: 100%;
  width: 100%;
  justify-content: center;

  form {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    justify-content: start;
    gap: 10px;
  }
`;

export const BottomWrapper = styled.div`
  position: absolute;
  bottom: 2%;
  right: 5%;
  display: flex;
  width: auto;
  gap: 20px;
  justify-content: space-between;
`;

export const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-items: ${(props) => (props.Start ? "start" : "center")};
  justify-content: center;

  p {
    margin: 0;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    height: ${(props) => (props.Start ? "150px" : "")};
    width: ${(props) => (props.Start ? "300px" : "")};
  }
`;

export const QuotesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1.5rem;
    color: var(--cta-color);
  }
  p {
    font-size: 10px;
    color: var(--grey-color);
  }
`;

export const InputName = styled.input`
  background-color: transparent;
  text-align: center;
  border: none;
  color: white;
  font-size: 1rem;
  border-bottom: 2px solid var(--cta-color);
  width: 300px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--grey-color);
  }
`;

export const DateContainer = styled.div`
  color: var(--primary-color);
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TimeWrapper = styled.div`
  font-size: 4rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CountDownWrapper = styled.div`
  display: flex;
  width: 55%;
  align-items: center;
  font-size: 6rem;
  color: white;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const WeatherWrapper = styled.div`
  font-size: 2rem;
  text-align: right;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const TempWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--cta-color);
`;

export const InputCitySearch = styled.input`
  background-color: transparent;
  text-align: center;
  border: none;
  color: white;
  font-size: 1rem;
  border-bottom: 2px solid var(--cta-color);
  width: auto;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--grey-color);
  }
`;
