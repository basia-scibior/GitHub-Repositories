import styled from "styled-components";
import { darkGrey, grey } from "../../theme";

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
  border-bottom: 1px solid ${grey};
`;

export const Title = styled.h1`
  color: ${darkGrey};
  text-align: center;
`;
