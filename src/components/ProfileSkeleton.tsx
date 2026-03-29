export default function ProfileSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center animate-pulse">

        
        <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto"></div>

        <div className="h-4 bg-gray-200 rounded w-32 mx-auto mt-2"></div>

        <div className="h-6 bg-gray-300 rounded w-40 mx-auto mt-6"></div>

       
        <div className="h-4 bg-gray-200 rounded w-32 mx-auto mt-2"></div>

        
        <div className="flex justify-around mt-6 border-t pt-4">

          <div className="flex flex-col items-center gap-2">
            <div className="h-6 w-10 bg-gray-300 rounded"></div>
            <div className="h-3 w-16 bg-gray-200 rounded"></div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="h-6 w-10 bg-gray-300 rounded"></div>
            <div className="h-3 w-16 bg-gray-200 rounded"></div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="h-6 w-10 bg-gray-300 rounded"></div>
            <div className="h-3 w-16 bg-gray-200 rounded"></div>
          </div>

        </div>

      
        <div className="h-10 bg-gray-300 rounded mt-6"></div>

      </div>
    </div>
  );
}