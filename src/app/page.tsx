import Image from "next/image";
import Disclaimer from "@/components/Disclaimer";
import LegalDocumentsLinks from "@/components/LegalDocumentsLinks";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <Image
                src="/logo.svg"
                alt="Pipes Logo"
                width={240}
                height={91}
                className="invert"
                priority
              />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              LEGAL DOCUMENTS
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transparent terms and policies for our global payments platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="mailto:compliance@pipes.tech"
                variant="primary"
                className="text-lg px-8 py-4"
              >
                Contact Compliance
              </Button>
              <Button
                href="https://pipes.tech"
                target="_blank"
                variant="secondary"
                className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-[#F2FF46] hover:text-black hover:border-[#F2FF46]"
              >
                Visit Main Site
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            IMPORTANT NOTICE
          </h2>
          <Disclaimer />
        </div>
      </div>

      {/* Legal Documents Section */}
      <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            ACCESS LEGAL DOCUMENTS
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Choose your region to view the applicable terms and policies
          </p>
          <LegalDocumentsLinks />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            KEY FEATURES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                GLOBAL COMPLIANCE
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {/* Region-specific terms for UAE and EEA markets, ensuring full
                regulatory compliance */}
                Region-specific terms for EEA markets, ensuring full regulatory
                compliance
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                TRANSPARENT POLICIES
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Clear privacy policies and terms of service to protect your
                rights
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                OPEN SOURCE LICENSES
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Full transparency on third-party dependencies and licensing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
