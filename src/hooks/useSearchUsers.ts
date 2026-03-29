
import { useQuery } from "@tanstack/react-query";
import type { GithubUserSearchItem } from "../types/githubTypes";
import { fetchProfile, searchUsers } from "../api/searchUsers";

export function useGithubProfile(username: string){
    return useQuery({
        queryKey: ['github-profile', username],
        queryFn: () => fetchProfile(username),
        enabled: !!username,
    });
}   

export function useSearchUsers(query: string) {
  return useQuery<GithubUserSearchItem[]>({
    queryKey: ["github-search", query],
    queryFn: () => searchUsers(query),
    enabled: !!query,
    initialData: [],
  });
}