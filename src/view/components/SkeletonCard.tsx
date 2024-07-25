export function SkeletonCard() {
  return (
    <div role="status" className="border rounded-md border-blue-50 mb-8 transform transition-transform duration-300 hover:-translate-y-2 animate-pulse">
      <div className="relative w-full overflow-hidden">
        <div className="w-full h-48 bg-gray-300 rounded-md"></div>
        <div className="absolute inset-0 bg-gray-800 bg-opacity-45 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 ease-in-out">
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center border-2 border-gray-500 rounded-full bg-gray-400"></div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center border-2 border-gray-500 rounded-full bg-gray-400"></div>
        </div>
      </div>
      <div className="mt-3 flex flex-col justify-center items-center gap-2 pb-4 max-w-full text-center">
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-2"></div>
        <div className="h-2 bg-gray-200 rounded-full w-32 mb-2"></div>
        <div className="h-2 bg-gray-200 rounded-full w-24"></div>
      </div>
    </div>
  );
}
