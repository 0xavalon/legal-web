import Link from "next/link";

export default function ThirdPartyLegal() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
          >
            ← Back to Legal Documents
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Third Party Terms and Policies
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Please find 3rd party ToS and PP:
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-8 border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Bridge
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our services integrate with Bridge. Please review their terms of
              service and privacy policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.bridge.xyz/legal/row-user-terms/bridge-building-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 dark:bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors text-center"
              >
                Terms & Services →
              </a>
              <a
                href="https://www.bridge.xyz/legal/row-user-terms/bridge-building-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 dark:bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors text-center"
              >
                Privacy Policy →
              </a>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-500 p-6 rounded">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Note
          </h3>
          <p className="text-blue-700 dark:text-blue-100 text-sm">
            These are third-party services. By using our platform, you may also
            be subject to their terms and policies. We encourage you to review
            them carefully.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
          >
            ← Back to Legal Documents
          </Link>
        </div>
      </div>
    </div>
  );
}
