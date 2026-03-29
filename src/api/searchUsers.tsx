import type { GithubUserSearchItem } from "../types/githubTypes";


export async function searchUsers(query: string): Promise<GithubUserSearchItem[]> {
  const res = await fetch(`https://api.github.com/search/users?q=${query}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) throw new Error("Failed to search users");

  const data = await res.json();
  return data.items;
}