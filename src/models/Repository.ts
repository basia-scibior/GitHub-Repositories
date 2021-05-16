export interface Repository {
  id: number;
  name: string;
  language: string;
  created_at: string;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  };
  description: string;
  category: string;
}
