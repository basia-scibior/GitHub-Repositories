import { FC } from "react";
import * as React from "react";
import {Container, StyledInput} from "./Search.styles";

interface SearchProps {
  value: any;
  onChange: (inputText: string) => void;
}

export const Search: FC<SearchProps> = (props) => (
  <Container>
    <StyledInput
      placeholder="Search"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  </Container>
);
