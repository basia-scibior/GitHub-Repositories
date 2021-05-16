import { useQuery } from "react-query";
import { searchRepositories } from "../api/search";

export const useRemoteRepositories = (query: string, isEnabled: boolean) =>
  useQuery(["search-repositories", query], () => searchRepositories(query), {
    enabled: query !== "" && isEnabled,
  });
