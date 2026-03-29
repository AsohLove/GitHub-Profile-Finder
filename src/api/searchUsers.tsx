import type { GithubProfileType } from "../types/githubTypes";

import type { GithubUserSearchItem } from "../types/githubTypes";

export async function fetchProfile(username: string): Promise<GithubProfileType> {
    const res = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
    });

    if(!res.ok) {
        throw new Error('Failed to fetch github profile');
    }
    
    return res.json();
}

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