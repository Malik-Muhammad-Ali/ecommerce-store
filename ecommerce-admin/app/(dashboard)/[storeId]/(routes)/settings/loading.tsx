export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex items-center space-x-4 animate-pulse">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </div>
        <div className="mt-4 text-gray-500">Loading...</div>
        </div>
    );
};
