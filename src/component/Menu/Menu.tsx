import { FC } from "react";
import * as React from "react";
import { Container, Item } from "./Menu.styles";

interface LayoutProps {}

export const Menu: FC<LayoutProps> = (props) => (
  <Container>
    <Item>Category</Item>
  </Container>
);
