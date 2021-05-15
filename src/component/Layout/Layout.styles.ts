import styled from "styled-components";
import { pink } from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  @media (max-width: 750px) {
    width: 95%;
  }
`;

export const Header = styled.div`
  background-color: ${pink};
`;

export const Title = styled.h1`
  color: white;
  opacity: 0.9;
  text-align: center;
`;
