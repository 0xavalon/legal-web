import Image from "next/image";
import Button from "@/components/Button";
import Disclaimer from "@/components/Disclaimer";
import LegalDocumentsLinks from "@/components/LegalDocumentsLinks";
import { HOME_PAGE_DATA } from "@/constant/home-page";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center mb-12">
            {/* <div className="mb-8 flex justify-center">
              <Image
                src="/logo.svg"
                alt="Fin.com"
                width={161}
                height={33}
                className="invert w-32"
                priority
              />
            </div> */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              {HOME_PAGE_DATA.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              {HOME_PAGE_DATA.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {HOME_PAGE_DATA.hero.buttons.map((button) => (
                <Button
                  key={button.href}
                  href={button.href}
                  variant={button.variant}
                  target={button.target}
                  className={`text-lg px-8 py-4 ${
                    button.variant === "secondary"
                      ? "bg-transparent border-white text-white hover:bg-[#F2FF46] hover:text-black hover:border-[#F2FF46]"
                      : ""
                  }`}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {HOME_PAGE_DATA.sections.disclaimer.title}
          </h2>
          <Disclaimer />
        </div>
      </div>

      {/* Legal Documents Section */}
      <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            {HOME_PAGE_DATA.sections.legalDocuments.title}
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            {HOME_PAGE_DATA.sections.legalDocuments.subtitle}
          </p>
          <LegalDocumentsLinks />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            {HOME_PAGE_DATA.sections.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOME_PAGE_DATA.sections.features.items.map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
