import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
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
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 20px;
  color: #6b7280;
`;
