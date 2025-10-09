import Link from "next/link";

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Please find the ToS of UAE 🇦🇪 & EEA 🇪🇺 below:
        </p>

        {/* Disclaimer */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 dark:border-yellow-500 p-6 rounded mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
            Disclaimer
          </h3>
          <div className="text-yellow-800 dark:text-yellow-100 space-y-3 text-sm">
            <p>
              <strong>i)</strong> The Licence held by Wind Technologies Ltd is
              an Innovation Testing Licence (ITL) issued by the Dubai Financial
              Services Authority (DFSA), which authorises the Firm solely to
              test its services within the parameters approved under the DFSA
              Testing Plan (Phase 1).
            </p>
            <p>
              <strong>(ii)</strong> As the Licence is restricted to testing,
              certain standard regulatory requirements and client protections
              may not apply during this phase. Participants in the testing
              environment acknowledge that they may have reduced rights and may
              not be fully compensated for any losses incurred as part of the
              testing activities.
            </p>
            <p>
              <strong>(iii)</strong> The Firm will not undertake or process any
              financial transactions until a designated Client Money Account has
              been opened and approved, as per the DFSA Testing Plan.
            </p>
            <p>
              <strong>(iv)</strong> Upon completion of the testing phase and
              removal of licence restrictions, the Firm will execute and
              implement a new set of Terms & Conditions governing the full-scale
              authorised operations. All clients will be required to review and
              accept the revised Terms & Conditions prior to continuing any
              services.
            </p>
          </div>
        </div>

        {/* UAE ToS */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            🇦🇪 UAE ToS
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Consumers are advised to read and understand the applicable Terms
              and Conditions when considering a product or service.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The headings are for reference only. Some capitalized terms have
              specific definitions in the Glossary.
            </p>
            <div className="flex gap-4">
              <Link
                href="/terms/uae"
                className="inline-block bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Read Full UAE ToS
              </Link>
              <a
                href="/legal/uae-tos.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-600 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* EEA ToS */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 mb-8 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            🇪🇺 EEA ToS
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Consumers are advised to read and understand the applicable Terms
              and Conditions when considering a product or service.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The headings are for reference only. Some capitalized terms have
              specific definitions in the Glossary.
            </p>
            <div className="flex gap-4">
              <Link
                href="/terms/eea"
                className="inline-block bg-green-600 dark:bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
              >
                Read Full EEA ToS
              </Link>
              <a
                href="/legal/eea-tos.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-600 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                Download PDF
              </a>
            </div>
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
