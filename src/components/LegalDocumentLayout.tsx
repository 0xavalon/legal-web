import Disclaimer from "./Disclaimer";

interface LegalDocumentLayoutProps {
  title: string;
  region: string;
  emoji: string;
  showDisclaimer?: boolean;
  disclaimerVariant?: "yellow" | "red";
  children: React.ReactNode;
}

export default function LegalDocumentLayout({
  title,
  region,
  emoji,
  showDisclaimer = false,
  disclaimerVariant = "yellow",
  children,
}: LegalDocumentLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            {title} {emoji}
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-sm pb-6">
            Consumers are advised to read and understand the applicable terms
            when considering a product or service.
          </p>

          {showDisclaimer && <Disclaimer variant={disclaimerVariant} />}
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 prose prose-lg max-w-none dark:prose-invert">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
