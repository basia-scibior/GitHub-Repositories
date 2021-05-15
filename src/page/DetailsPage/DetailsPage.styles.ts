import styled from "styled-components";
import { lightGrey, pink } from "../../theme";

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  color: ${pink};
`;

export const Content = styled.div`
  height: 400px;
  width: 60%;
  margin: 10px 0;
  background-color: white;
  padding: 0 40px;
  border-radius: 5px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 750px) {
    display: unset;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
  @media (max-width: 750px) {
    display: unset;
  }
`;

export const Text = styled.span`
  color: ${lightGrey};
  font-size: 18px;
`;

export const Owner = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  margin-right: 15px;
  width: 40px;
  height: 40px;
`;
