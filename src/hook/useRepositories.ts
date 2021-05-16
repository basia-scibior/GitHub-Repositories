import { useLocalRepositories } from "./useLocalRepositories";
import { useRemoteRepositories } from "./useRemoteRepositories";
import { RepositoryType } from "../models/RepositoryType";

export const useRepositories = (query: string, type: RepositoryType) => {
  const { repositories: localRepositories } = useLocalRepositories(query);
  const { data: remoteRepositories, isLoading } = useRemoteRepositories(
    query,
    type === "remote"
  );

  return type === "local"
    ? {
        repositories: localRepositories,
        isLoading: false,
      }
    : {
        repositories: remoteRepositories || [],
        isLoading,
      };
};
