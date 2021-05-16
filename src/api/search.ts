import { stringify } from "qs";
import { api } from "./api";
import { Repository } from "../models/Repository";

export const searchRepositories = async (query: string | null) => {
  const searchParams = stringify(
    {
      q: query,
      sort: "stars",
    },
    { skipNulls: true }
  );

  return api
    .get<{ items: Repository[] }>(`/search/repositories?${searchParams}`, {
      auth: {
        username: process.env.GITHUB_USERNAME as string,
        password: process.env.GITHUB_PERSONAL_TOKEN as string,
      },
    })
    .then((response) => response.data.items);
};
