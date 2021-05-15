import styled from "styled-components";

export const SearchBar = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70%;
`;

export const Button = styled.button`
  color: #161e2e;
  cursor: pointer;
  width: 150px;
  height: 64px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 5px;
  :hover {
    background-color: #fbfcff;
  }
`;
