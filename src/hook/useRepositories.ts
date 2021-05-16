import { useQuery } from "react-query";
import { searchRepositories } from "../api/search";
import { useLocalRepositories } from "./useLocalRepositories";

export const useRemoteRepositories = (query: string, isEnabled: boolean) =>
  useQuery(["search-repositories", query], () => searchRepositories(query), {
    enabled: query !== "" && isEnabled,
  });

export const useRepositories = (query: string, isLocalSearch: boolean) => {
  const { repositories: localRepositories } = useLocalRepositories();
  const { data: remoteRepositories, isLoading } = useRemoteRepositories(
    query,
    !isLocalSearch
  );

  return isLocalSearch
    ? {
        isLoading: false,
        repositories: localRepositories.filter((repository) =>
          repository.name.includes(query)
        ),
      }
    : {
        repositories: remoteRepositories || [],
        isLoading,
      };
};
