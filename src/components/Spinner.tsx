export default function Spinner() {
    return (
        <div className="relative">
            <div className="h-40 bg-[oklch(0.79_0.02_343.73)] w-full" />
            <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center">
                <div className="animate-spin w-8 h-8 rounded-full border-4 border-gray-300 border-t-black" />
            </div>
        </div>
    );
}
