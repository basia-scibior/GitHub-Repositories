import styled from "styled-components";
import { pink } from "../../theme";

export const Title = styled.h1`
  color: ${pink};
`;

export const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 70% 30%;
  line-height: 35px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    display: unset;
  }
`;

export const Owner = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  margin-right: 15px;
  width: 40px;
  height: 40px;
`;
