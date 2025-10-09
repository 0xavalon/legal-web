import Image from "next/image";
import Disclaimer from "@/components/Disclaimer";
import LegalDocumentsLinks from "@/components/LegalDocumentsLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Logo and Title */}
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.svg"
              alt="Pipes Logo"
              width={200}
              height={76}
              className="dark:invert"
              priority
            />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Legal
          </h1>
        </div>

        {/* Disclaimer */}
        <div className="mb-12">
          <Disclaimer />
        </div>

        {/* Legal Documents Links */}
        <LegalDocumentsLinks />

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>For questions, contact us at</p>
          <a
            href="mailto:compliance@pipes.tech"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            compliance@pipes.tech
          </a>
        </div>
      </div>
    </div>
  );
}
