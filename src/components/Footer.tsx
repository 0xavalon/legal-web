import Button from "./Button";
import { FOOTER_DATA } from "@/constant/components";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {FOOTER_DATA.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      {...(link.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="text-gray-400 hover:text-[#F2FF46] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">{FOOTER_DATA.copyright}</p>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">
                {FOOTER_DATA.contact.label}
              </span>
              <Button
                href={FOOTER_DATA.contact.email}
                variant="primary"
                className="text-sm px-6 py-2"
              >
                {FOOTER_DATA.contact.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
