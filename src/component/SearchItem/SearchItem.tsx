import { FC } from "react";
import * as React from "react";
import {
  ContainerAsLink,
  Name,
  Owner,
  Row,
  Language,
  Details,
} from "./SearchItem.styles";
import { Repository } from "../../models/Repository";
import { Logo } from "../../page/DetailsPage/DetailsPage.styles";

interface SearchItemProps {
  repository: Repository;
}

export const SearchItem: FC<SearchItemProps> = ({ repository }) => (
  <ContainerAsLink to={`/details/${repository.owner.login}/${repository.name}`}>
    <Row>
      <Logo src={repository?.owner.avatar_url} />
      <Name>{repository.name}</Name>
    </Row>

    <Details>
      <Owner>{repository.owner.login}</Owner>{" "}
      <Language>&bull; {repository.language}</Language>
    </Details>
  </ContainerAsLink>
);
