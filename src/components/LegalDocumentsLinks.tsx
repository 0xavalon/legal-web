import Link from "next/link";

export default function LegalDocumentsLinks() {
  return (
    <div className="space-y-4">
      {/* <Link
        href="/terms-and-conditions/uae"
        className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-900 dark:text-gray-100 font-medium">
            🇦🇪 UAE - Terms & Conditions
          </span>
          <span className="text-gray-400 dark:text-gray-500">→</span>
        </div>
      </Link> */}

      <Link
        href="/terms-and-conditions/eea"
        className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-green-500 dark:hover:border-green-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-900 dark:text-gray-100 font-medium">
            🇪🇺 EEA - Terms & Conditions
          </span>
          <span className="text-gray-400 dark:text-gray-500">→</span>
        </div>
      </Link>

      {/* <Link
        href="/privacy-policy/uae"
        className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-900 dark:text-gray-100 font-medium">
            🇦🇪 UAE - Privacy Policy
          </span>
          <span className="text-gray-400 dark:text-gray-500">→</span>
        </div>
      </Link> */}

      <Link
        href="/privacy-policy/eea"
        className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-green-500 dark:hover:border-green-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-900 dark:text-gray-100 font-medium">
            🇪🇺 EEA - Privacy Policy
          </span>
          <span className="text-gray-400 dark:text-gray-500">→</span>
        </div>
      </Link>

      <Link
        href="/third-party"
        className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-orange-500 dark:hover:border-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-900 dark:text-gray-100 font-medium">
            🔗 3rd Party - Terms & Privacy Policy
          </span>
          <span className="text-gray-400 dark:text-gray-500">→</span>
        </div>
      </Link>

      <Link
        href="/licenses"
        className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-900 dark:text-gray-100 font-medium">
            📄 Licenses
          </span>
          <span className="text-gray-400 dark:text-gray-500">→</span>
        </div>
      </Link>
    </div>
  );
}
