import styled from "styled-components";

export const EffectButton = styled.button`
  width: 70px;
  background: linear-gradient(138deg, var(--sec-color) 65%, white 36%);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  height: 40px;
  display: flex;
  font-weight: bold;
  padding: 9px 10px;
  margin: 1px;
  border: none;
  letter-spacing: 1px;
  border-radius: 6px;
  color: var(--primary-color);
  justify-content: space-between;

  &:hover {
    justify-content: center;
    background: linear-gradient(189deg, var(--sec-color) 75%, white 36%);
    color: #ffffff;
  }
  i {
    color: #ffffff;
  }
`;

export const SecBtn = styled.div`
  border: none;
  color: var(--grey-color);
  font-size: 15px;
  background: transparent;
  cursor: pointer;
`;

export const WeatherBtn = styled.div`
  background-color: transparent;
  border: none;
  color: var(--grey-color);
  text-align: end;
  margin-top: 5px;

  &:hover {
    cursor: pointer;
    color: var(--primary-color);
  }
`;

export const TransparentBtn = styled.button`
  background: transparent;
  border: 2px solid var(--primary-color);
  color: white;
  cursor: pointer;
  width: auto;
  padding: 0.5rem;
`;
