import { useParams } from "react-router-dom";
import { useGithubProfile } from "../hooks/useGithubProfile";

export default function ProfilePage() {
  const { username } = useParams();

  const { data, isLoading } = useGithubProfile(username || "");

  if (isLoading)
    return (
      <div className="flex justify-center items-center bg-gray-100 min-h-screen">
        <p className="text-gray-500 text-lg animate-pulse">Loading profile...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">

        
        <img
          src={data?.avatar_url}
          alt={data?.login}
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-200"
        />

        
        <h2 className="text-2xl font-bold mt-4">{data?.login}</h2>
        <p className="text-xl font-semibold">{data?.name}</p>
       

        <div className="flex justify-around mt-6 border-t pt-4">

          <div className="bg-gray-100 rounded-2xl py-4 px-2 text-center">
            <p className="text-black font-extrabold mt-1">
                {data?.location || "Not specified"}
            </p>
            <p className="text-gray-500 text-sm">Location</p>
          </div>  

          <div className="bg-gray-100 rounded-2xl py-4 px-2 text-center">
            <p className="text-xl font-semibold">{data?.followers}</p>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>

          <div className="bg-gray-100 rounded-2xl py-4 px-2 text-center">
            <p className="text-xl font-semibold">{data?.following}</p>
            <p className="text-gray-500 text-sm">Following</p>
          </div>

          <div className="bg-gray-100 rounded-2xl py-4 px-2 text-center">
            <p className="text-xl font-semibold">{data?.public_repos}</p>
            <p className="text-gray-500 text-sm">Repos</p>
          </div>

        </div>

       
        <div className="mt-6 flex flex-col gap-3">

          <a
            href={data?.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            View on GitHub
          </a>

        </div>

      </div>
    </div>
  );
}
