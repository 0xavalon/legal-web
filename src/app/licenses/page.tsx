export default function Licenses() {
  const licenses = [
    {
      jurisdiction: "USA",
      entity: "Stably",
      licenseType: "FinCEN Registered Money Service Business (MSB)",
      licenseNumber: "31000230810249",
      registrationEntity: "Financial Crimes Enforcement Network",
      flag: "🇺🇸",
    },
    {
      jurisdiction: "Philippines",
      entity: "Dragonpay",
      licenseType: "Operator of Payment Systems (OPS)",
      licenseNumber: "OPSCOR-2020-0022",
      registrationEntity: "Bangko Sentral ng Pilipinas (BSP)",
      flag: "🇵🇭",
    },
    {
      jurisdiction: "Lithuania",
      entity: "UAB Wind Technologies",
      licenseType: "Virtual Asset Service Provider",
      licenseNumber: "Registration: 306288904",
      registrationEntity: "Financial Crime Investigation Service",
      flag: "🇱🇹",
    },
    {
      jurisdiction: "UAE",
      entity: "Wind Technologies",
      licenseType:
        "Payment Services Provider (Category 3D): Providing Money Services Advising or Arranging on Money Services",
      licenseNumber: "F008395",
      registrationEntity: "Dubai Financial Services Authority",
      flag: "🇦🇪",
      isInnovationTesting: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Legal Documents
          </a>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Pipes Licenses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Pipes operates through multiple legal entities with proper licensing
            across different jurisdictions to provide secure and compliant
            services.
          </p>
        </div>

        <div className="mb-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                About Our Operations
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                UAB Wind Technologies is a technology company that works with
                multiple banks and payments partners to provide on-off ramps and
                crypto ↔ fiat services across various jurisdictions.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {licenses.map((license) => (
            <div
              key={license.jurisdiction}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{license.flag}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {license.jurisdiction}
                      </h2>
                      <p className="text-blue-100 text-sm">{license.entity}</p>
                    </div>
                  </div>
                  {license.isInnovationTesting && (
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-3 py-1 rounded-full">
                      Testing Phase
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                    License Type
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100 font-medium">
                    {license.licenseType}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                      License Number
                    </h3>
                    <p className="text-gray-900 dark:text-gray-100 font-mono text-sm bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded">
                      {license.licenseNumber}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                      Issuing Authority
                    </h3>
                    <p className="text-gray-900 dark:text-gray-100">
                      {license.registrationEntity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-8">
          <div className="flex items-start mb-6">
            <div className="flex-shrink-0">
              <svg
                className="h-8 w-8 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="ml-4 flex-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Important Notice: UAE Innovation Testing Licence
              </h2>

              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Limited Testing Authorization
                  </p>
                  <p>
                    The UAE licence is an{" "}
                    <strong>"Innovation Testing Licence"</strong> and authorizes
                    only the testing of services within approved parameters.
                  </p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Reduced Client Protections
                  </p>
                  <p>
                    Because the licence is limited to testing, standard
                    regulatory requirements and client protections do not apply.
                    Clients may have reduced rights and may not be fully
                    compensated if they experience losses while participating in
                    service testing.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Financial Transactions
                  </p>
                  <p>
                    The Firm will not undertake or process any financial
                    transactions until a designated Client Money Account has
                    been opened and approved, as per the DFSA Testing Plan.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Future Operations
                  </p>
                  <p>
                    Upon completion of the testing phase and removal of licence
                    restrictions, the Firm will execute and implement a new set
                    of Terms & Conditions governing full-scale authorised
                    operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Legal Documents
          </a>
        </div>
      </div>
    </div>
  );
}
