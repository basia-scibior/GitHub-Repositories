export type Repository = {
  id: number;
  name: string;
  stargazers_count: number;
  language: string;
  owner: {
    avatar_url: string;
    login: string;
  };
  description: string;
  forks: number;
  open_issues: number;
};
