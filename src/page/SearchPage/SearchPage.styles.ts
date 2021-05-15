import styled from "styled-components";
import { pink } from "../../theme";

export const Container = styled.main`
  width: 100%;
`;

export const SearchBar = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70%;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const Button = styled.button`
  color: ${pink};
  cursor: pointer;
  width: 100px;
  padding: 25px 5px;
  background-color: white;
  opacity: 0.9;
  border-radius: 7px;
  margin-left: 5px;
`;
