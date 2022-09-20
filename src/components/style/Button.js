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
