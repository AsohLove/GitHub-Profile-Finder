
import { useQuery } from "@tanstack/react-query";
import type { GithubUserSearchItem } from "../types/githubTypes";
import {  searchUsers } from "../api/searchUsers";


export function useSearchUsers(query: string) {
  return useQuery<GithubUserSearchItem[]>({
    queryKey: ["github-search", query],
    queryFn: () => searchUsers(query),
    enabled: !!query,
    initialData: [],
  });
}