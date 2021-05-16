import * as React from "react";
import { FC, useState } from "react";
import { Button, Container, SearchBar } from "./SearchPage.styles";
import { Search } from "../../component/Search/Search";
import { useDebounce } from "use-debounce";
import { SearchItems } from "../../component/SearchItems/SearchItems";
import { useRepositories } from "../../hook/useRepositories";

export const SearchPage: FC = () => {
  const [isLocalSearch, setIsLocalSearch] = useState<boolean>(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);
  const { repositories, isLoading } = useRepositories(
    debouncedQuery,
    isLocalSearch
  );

  // const repositories = data ? data.items : [];

  return (
    <Container>
      <SearchBar>
        <Search value={query} onChange={setQuery} />
        <Button
          isSelected={!isLocalSearch}
          onClick={() => setIsLocalSearch(!isLocalSearch)}
        >
          GITHUB
        </Button>
        <Button
          isSelected={isLocalSearch}
          onClick={() => setIsLocalSearch(!isLocalSearch)}
        >
          SAVED
        </Button>
      </SearchBar>
      <SearchItems
        repositories={repositories}
        isLoading={isLoading}
        hasQuery={debouncedQuery.length > 0}
      />
    </Container>
  );
};
