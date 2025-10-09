import Button from "@/components/Button";

export default function ThirdPartyLegal() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            THIRD PARTY TERMS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Please find 3rd party ToS and PP:
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Bridge Card */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#F2FF46] transition-all mb-8">
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">🔗</span>
              <div>
                <h2 className="text-3xl font-bold text-black dark:text-white">
                  Bridge
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Payment Services Partner
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              Our services integrate with Bridge. Please review their terms of
              service and privacy policy.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button
                href="https://www.bridge.xyz/legal/row-user-terms/bridge-building-limited"
                target="_blank"
                variant="primary"
                className="w-full"
              >
                Terms & Services →
              </Button>
              <Button
                href="https://www.bridge.xyz/legal/row-user-terms/bridge-building-limited"
                target="_blank"
                variant="primary"
                className="w-full"
              >
                Privacy Policy →
              </Button>
            </div>
          </div>

          {/* Notice Box */}
          <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-xl mb-8 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-start">
              <span className="text-3xl mr-4">ℹ️</span>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  Important Notice
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  These are third-party services. By using our platform, you may
                  also be subject to their terms and policies. We encourage you
                  to review them carefully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
