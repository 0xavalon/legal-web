import Button from "./Button";
import { LEGAL_DOCUMENTS_LINKS_DATA } from "@/constant/components";

export default function LegalDocumentsLinks() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {LEGAL_DOCUMENTS_LINKS_DATA.filter((region) => region.enabled).map(
        (region) => (
          <div
            key={region.title}
            className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#F2FF46] transition-all group"
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">{region.emoji}</span>
              <div>
                <h3 className="text-xl font-bold text-white">{region.title}</h3>
                <p className="text-gray-400 text-sm">{region.description}</p>
              </div>
            </div>
            <div className="space-y-3">
              {region.links.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  variant={link.variant}
                  className="w-full"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
