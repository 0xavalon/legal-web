import Link from "next/link";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Please find the PP of UAE 🇦🇪 & EEA 🇪🇺 below:
        </p>

        {/* UAE Privacy Policy */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            🇦🇪 UAE PP
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This Privacy Policy contains an overview of the collection, use,
              and disclosure of your personal data. We take privacy and
              protection of data seriously and are committed to handling the
              personal information responsibly.
            </p>
            <Link
              href="/privacy/uae"
              className="inline-block bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Read Full UAE Privacy Policy
            </Link>
          </div>
        </div>

        {/* EEA Privacy Policy */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-8 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            🇪🇺 EEA PP
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This Privacy Policy contains an overview of the collection, use,
              and disclosure of your personal data. We take privacy and
              protection of data seriously and are committed to handling the
              personal information responsibly.
            </p>
            <Link
              href="/privacy/eea"
              className="inline-block bg-green-600 dark:bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
            >
              Read Full EEA Privacy Policy
            </Link>
          </div>
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
