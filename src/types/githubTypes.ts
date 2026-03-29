export interface GithubProfileType {
    login: string;
    avatar_url: string;
    name: string;
    html_url: string;
    location: string;
    public_repos: number;
    followers: number;
    following: number;

}

export interface GithubUserSearchItem {
  login: string;
  avatar_url: string;
  html_url: string;
}