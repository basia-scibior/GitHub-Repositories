import { useLocalStorage } from "react-use";
import { LocalRepository } from "../models/LocalRepository";

export const useLocalRepositories = (query?: string) => {
  const [repositoriesMap, setRepositoriesMap] = useLocalStorage<
    Record<string, LocalRepository>
  >("repositories", {});

  const addRepository = (repository: LocalRepository) => {
    setRepositoriesMap((prevRepositories) => ({
      ...prevRepositories,
      [repository.id]: repository,
    }));
  };

  const deleteRepository = (repository: LocalRepository) => {
    const nextRepositoriesMap = { ...repositoriesMap };
    delete nextRepositoriesMap[repository.id];
    setRepositoriesMap(nextRepositoriesMap);
  };
  const repositories = Object.values(repositoriesMap || {});

  return {
    repositories: query
      ? repositories.filter((repository) => repository.name.includes(query))
      : repositories,
    addRepository,
    deleteRepository,
  };
};
