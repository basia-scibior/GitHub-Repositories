import * as React from "react";
import { FC, useState } from "react";
import { Button, Container, SearchBar } from "./SearchPage.styles";
import { Search } from "../../component/Search/Search";
import { useDebounce } from "use-debounce";
import { SearchItems } from "../../component/SearchItems/SearchItems";
import { useRepositories } from "../../hook/useRepositories";
import { useQueryParam } from "../../hook/useQueryParam";
import { RepositoryType } from "../../models/RepositoryType";

export const SearchPage: FC = () => {
  const [repositoryType, setRepositoryType] =
    useState<RepositoryType>("remote");
  const [query, setQuery] = useQueryParam("q", "");
  const [debouncedQuery] = useDebounce(query, 500);
  const { repositories, isLoading } = useRepositories(
    debouncedQuery,
    repositoryType
  );

  return (
    <Container>
      <SearchBar>
        <Search value={query} onChange={setQuery} />
        <Button
          isSelected={repositoryType === "remote"}
          onClick={() => setRepositoryType("remote")}
        >
          GitHub
        </Button>
        <Button
          isSelected={repositoryType === "local"}
          onClick={() => setRepositoryType("local")}
        >
          Saved
        </Button>
      </SearchBar>
      <SearchItems
        repositories={repositories}
        isLoading={isLoading}
        isLocalSearch={repositoryType === "local"}
        hasQuery={debouncedQuery.length > 0}
      />
    </Container>
  );
};
