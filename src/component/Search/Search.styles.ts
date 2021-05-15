import styled from "styled-components";
import { grey } from "../../theme";

export const Container = styled.div`
  background: #fff;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  border-color: transparent;
  height: 64px;
  width: 60%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  padding: 0 30px;
  @media (max-width: 750px) {
    width: 95%;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 20px;
  color: ${grey};
`;
