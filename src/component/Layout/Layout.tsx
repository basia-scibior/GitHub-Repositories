import { FC } from "react";
import * as React from "react";
import { Container, Content, Header, Title } from "./Layout.styles";
import { CategoriesList } from "../CategoriesList/CategoriesList";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = (props) => (
  <Container>
    <Header>
      <Title>Search GitHub Repositories</Title>
    </Header>
    <Content>
      <CategoriesList />
      <div>{props.children}</div>
    </Content>
  </Container>
);
