import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center py-24 bg-surface">
      <div className="container mx-auto px-4 text-center">
        <span className="text-8xl md:text-9xl font-bold text-blue-600 block mb-4">404</span>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
