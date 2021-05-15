import { FC } from "react";
import * as React from "react";
import { Container, Item, Title } from "./Menu.styles";

interface LayoutProps {}

export const Menu: FC<LayoutProps> = (props) => (
  <Container>
    <Title>Categories</Title>
    <Item>Category</Item>
  </Container>
);
