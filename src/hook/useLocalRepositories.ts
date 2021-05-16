import { useLocalStorage } from "react-use";
import { LocalRepository } from "../models/LocalRepository";

export const useLocalRepositories = () => {
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

  return {
    repositories: Object.values(repositoriesMap || {}),
    addRepository,
    deleteRepository,
  };
};
