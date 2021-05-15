import { api } from "./api";
import { Repository } from "../models/Repository";

export const getRepository = async (
  ownerName: Repository["owner"]["login"],
  repoName: Repository["name"]
) => {
  return api
    .get<Repository>(`/repos/${ownerName}/${repoName}`, {
      auth: {
        username: process.env.GITHUB_USERNAME as string,
        password: process.env.GITHUB_PERSONAL_TOKEN as string,
      },
      data: { owner: ownerName, repo: repoName },
    })
    .then((response) => response.data);
};
