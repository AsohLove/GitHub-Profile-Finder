import type { GithubProfileType } from "../types/githubTypes";

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