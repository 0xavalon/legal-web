import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Terms of Services and Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Updated today
          </p>
        </div>

        {/* Terms of Service Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Please find the ToS of UAE 🇦🇪 & EEA 🇪🇺 below:
          </h2>

          {/* Disclaimer */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 dark:border-yellow-500 p-6 rounded mb-6">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
              Disclaimer
            </h3>
            <div className="text-yellow-800 dark:text-yellow-100 space-y-3 text-sm">
              <p>
                <strong>i)</strong> The Licence held by Wind Technologies Ltd is
                an Innovation Testing Licence (ITL) issued by the Dubai
                Financial Services Authority (DFSA), which authorises the Firm
                solely to test its services within the parameters approved under
                the DFSA Testing Plan (Phase 1).
              </p>
              <p>
                <strong>(ii)</strong> As the Licence is restricted to testing,
                certain standard regulatory requirements and client protections
                may not apply during this phase. Participants in the testing
                environment acknowledge that they may have reduced rights and
                may not be fully compensated for any losses incurred as part of
                the testing activities.
              </p>
              <p>
                <strong>(iii)</strong> The Firm will not undertake or process
                any financial transactions until a designated Client Money
                Account has been opened and approved, as per the DFSA Testing
                Plan.
              </p>
              <p>
                <strong>(iv)</strong> Upon completion of the testing phase and
                removal of licence restrictions, the Firm will execute and
                implement a new set of Terms & Conditions governing the
                full-scale authorised operations. All clients will be required
                to review and accept the revised Terms & Conditions prior to
                continuing any services.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                UAE ToS 🇦🇪
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                Consumers are advised to read and understand the applicable
                Terms and Conditions when considering a product or service.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                EEA ToS 🇪🇺
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                Consumers are advised to read and understand the applicable
                Terms and Conditions when considering a product or service.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/terms"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              View Full Terms of Service →
            </Link>
          </div>
        </div>

        {/* Privacy Policy Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Please find the PP of UAE 🇦🇪 & EEA 🇪🇺 below:
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                UAE PP 🇦🇪
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                Privacy Policy for United Arab Emirates
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                EEA PP 🇪🇺
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                Privacy Policy for European Economic Area
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/privacy"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              View Full Privacy Policies →
            </Link>
          </div>
        </div>

        {/* Third Party Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Please find 3rd party ToS and PP:
          </h2>
          <div className="border-l-4 border-purple-500 pl-4 py-2 mb-4">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">
              Bridge
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
              Terms & Services and Privacy Policy
            </p>
          </div>
          <Link
            href="/third-party"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            View Third Party Legal Documents →
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
          <p className="mb-2">Did this answer your question? 😞😐😃</p>
          <div className="mt-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Pipes Help Center
            </p>
            <p className="text-blue-600 dark:text-blue-400">
              support@pipes.tech
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
