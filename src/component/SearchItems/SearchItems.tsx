import * as React from "react";
import { FC } from "react";
import { SearchItem } from "../../component/SearchItem/SearchItem";
import { Repository } from "../../models/Repository";
import { CenterMessage } from "./SearchItems.styles";

interface SearchItemsProps {
  repositories: Repository[];
  isLoading: boolean;
  hasQuery: boolean;
}

export const SearchItems: FC<SearchItemsProps> = ({
  repositories,
  isLoading,
  hasQuery,
}) => {
  if (!hasQuery) {
    return <CenterMessage>Start typing to see results</CenterMessage>;
  } else if (isLoading) {
    return <CenterMessage>Loading...</CenterMessage>;
  } else if (!isLoading && repositories.length === 0) {
    return <CenterMessage>Sorry, no results found</CenterMessage>;
  }

  return (
    <>
      {repositories &&
        repositories.map((repository) => (
          <SearchItem key={repository.id} repository={repository} />
        ))}
    </>
  );
};
