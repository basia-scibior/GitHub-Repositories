import styled from "styled-components";
import { grey, lightGrey } from "../../theme";

export const Container = styled.div`
  background-color: ${lightGrey};
  border-radius: 8px;
  border: 1px solid ${grey};
  color: red;
  height: 64px;
  width: 85%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  padding: 0 20px;
  @media (max-width: 750px) {
    width: 95%;
  }
  :hover {
    border: 1px solid #c2c7d0;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 20px;
`;
