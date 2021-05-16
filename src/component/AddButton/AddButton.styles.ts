import styled from "styled-components";
import { pink } from "../../theme";

export const Button = styled.button`
  background-color: ${pink};
  color: white;
  font-size: 30px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
