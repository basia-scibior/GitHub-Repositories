import styled from "styled-components";
import { blueGrey, darkGrey } from "../../theme";

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

interface ButtonProps {
  isSelected: boolean;
}
export const Button = styled.button`
  color: ${darkGrey};
  cursor: pointer;
  width: 150px;
  height: 64px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 5px;
  margin-left: 5px;
  :hover {
    opacity: 0.8;
  }
  background-color: ${(props: ButtonProps) =>
    props.isSelected ? blueGrey : "white"};
`;
