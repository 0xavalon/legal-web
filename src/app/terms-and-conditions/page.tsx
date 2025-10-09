import Button from "@/components/Button";
import Disclaimer from "@/components/Disclaimer";
import { TERMS_OF_SERVICE_DATA } from "@/constant/legal-pages";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            {TERMS_OF_SERVICE_DATA.pageTitle}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {TERMS_OF_SERVICE_DATA.subtitle}
          </p>

          {TERMS_OF_SERVICE_DATA.showDisclaimer && (
            <Disclaimer variant="yellow" />
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {TERMS_OF_SERVICE_DATA.cards.map((card) => (
              <div
                key={card.href}
                className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#F2FF46] transition-all"
              >
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-4">{card.flag}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">
                      {card.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {card.jurisdiction}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {card.description}
                </p>
                <Button href={card.href} variant="primary" className="w-full">
                  {card.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
