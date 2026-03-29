import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "../api/fetchProfile";

export function useGithubProfile(username: string){
    return useQuery({
        queryKey: ['github-profile', username],
        queryFn: () => fetchProfile(username),
        enabled: !!username,
    });
}   
