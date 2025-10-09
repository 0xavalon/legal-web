import Button from "@/components/Button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            PRIVACY POLICY
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Please find the PP of UAE 🇦🇪 & EEA 🇪🇺 below:
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* UAE Privacy Policy Card */}
            <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#F2FF46] transition-all">
              <div className="flex items-center mb-6">
                <span className="text-5xl mr-4">🇦🇪</span>
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    UAE Privacy Policy
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    United Arab Emirates
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This Privacy Policy contains an overview of the collection, use,
                and disclosure of your personal data. We take privacy and
                protection of data seriously and are committed to handling
                personal information responsibly.
              </p>
              <Button
                href="/privacy-policy/uae"
                variant="primary"
                className="w-full"
              >
                Read Full UAE Privacy Policy →
              </Button>
            </div>

            {/* EEA Privacy Policy Card */}
            <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#F2FF46] transition-all">
              <div className="flex items-center mb-6">
                <span className="text-5xl mr-4">🇪🇺</span>
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    EEA Privacy Policy
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    European Economic Area
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This Privacy Policy contains an overview of the collection, use,
                and disclosure of your personal data. We take privacy and
                protection of data seriously and are committed to handling
                personal information responsibly.
              </p>
              <Button
                href="/privacy-policy/eea"
                variant="primary"
                className="w-full"
              >
                Read Full EEA Privacy Policy →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
