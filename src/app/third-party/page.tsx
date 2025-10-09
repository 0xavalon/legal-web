import Button from "@/components/Button";
import { THIRD_PARTY_DATA } from "@/constant/legal-pages";

export default function ThirdPartyLegal() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            {THIRD_PARTY_DATA.pageTitle}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {THIRD_PARTY_DATA.subtitle}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Service Cards */}
          {THIRD_PARTY_DATA.services.map((service) => (
            <div
              key={service.name}
              className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#F2FF46] transition-all mb-8"
            >
              <div className="flex items-center mb-6">
                <span className="text-5xl mr-4">{service.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold text-black dark:text-white">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {service.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                {service.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button
                  href={service.links.tos}
                  target="_blank"
                  variant="primary"
                  className="w-full"
                >
                  Terms & Services →
                </Button>
                <Button
                  href={service.links.privacy}
                  target="_blank"
                  variant="primary"
                  className="w-full"
                >
                  Privacy Policy →
                </Button>
              </div>
            </div>
          ))}

          {/* Notice Box */}
          <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-xl mb-8 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-start">
              <span className="text-3xl mr-4">ℹ️</span>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {THIRD_PARTY_DATA.notice.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {THIRD_PARTY_DATA.notice.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
