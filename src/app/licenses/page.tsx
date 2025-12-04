import {
  COMPANY_INFO,
  LICENSES,
  UAE_NOTICE_SECTIONS,
} from "@/constant/licenses";

export default function Licenses() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            FIN.COM LICENSES
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl">
            Fin.com operates through multiple legal entities with proper
            licensing across different jurisdictions to provide secure and
            compliant services.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Info Box */}
          <div className="mb-12 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-start">
              <span className="text-4xl mr-4">ℹ️</span>
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                  About Our Operations
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  {COMPANY_INFO.description}
                </p>
              </div>
            </div>
          </div>

          {/* License Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {LICENSES.map((license) => (
              <div
                key={license.jurisdiction}
                className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-[#F2FF46] transition-all"
              >
                <div className="bg-[#F2FF46] p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-4xl">{license.flag}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-black">
                          {license.jurisdiction}
                        </h2>
                        <p className="text-gray-800 text-sm font-semibold">
                          {license.entity}
                        </p>
                      </div>
                    </div>
                    {license.isInnovationTesting && (
                      <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                        Testing Phase
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      License Type
                    </h3>
                    <p className="text-black dark:text-white font-medium text-lg">
                      {license.licenseType}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                        License Number
                      </h3>
                      <p className="text-black dark:text-white font-mono text-sm bg-gray-100 dark:bg-gray-900 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800">
                        {license.licenseNumber}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Issuing Authority
                      </h3>
                      <p className="text-black dark:text-white font-medium">
                        {license.registrationEntity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Warning Box */}
          <section className="mb-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                <span className="text-5xl mr-4">⚠️</span>
                Important Notice: UAE Innovation Testing Licence
              </h2>

              <div className="space-y-4">
                {UAE_NOTICE_SECTIONS.map((section) => (
                  <div
                    key={section.title}
                    className="p-5 rounded-xl border border-gray-200 dark:border-gray-800"
                  >
                    <p className="font-bold text-black dark:text-white mb-2 text-lg">
                      {section.title}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
