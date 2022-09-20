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

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  color: var(--primary-color);
  gap: 20px;
  height: 50%;
  width: 100%;
  justify-content: center;

  div {
    display: flex;
    justify-content: space-between;
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
`;

export const TimeWrapper = styled.div`
  font-size: 4rem;
  color: white;
`;
