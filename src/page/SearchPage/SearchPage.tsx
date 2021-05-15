import * as React from "react";
import { FC, useState } from "react";
import {
  Button,
  Container,
  Content,
  SearchBar,
  Top,
} from "./SearchPage.styles";
import { Search } from "../../component/Search/Search";
import { searchRepositories } from "../../api/search";
import { useDebounce } from "use-debounce";
import { SearchItems } from "../../component/SearchItems/SearchItems";
import { useQuery } from "react-query";

export const SearchPage: FC = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);

  const { data, isLoading } = useQuery(
    ["search-repositories", debouncedQuery],
    () => searchRepositories(debouncedQuery),
    { enabled: debouncedQuery !== "" }
  );

  const repositories = data ? data.items : [];

  return (
    <Container>
      <Content>
        <Top>
          <SearchBar>
            <Search value={query} onChange={setQuery} />
            <Button>In GitHub</Button>
            <Button>In saved</Button>
          </SearchBar>
        </Top>
        <SearchItems
          repositories={repositories}
          isLoading={isLoading}
          hasQuery={debouncedQuery.length > 0}
        />
      </Content>
    </Container>
  );
};