import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://pipes.tech"
                  className="text-gray-400 hover:text-[#F2FF46] transition-colors"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://help.pipes.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#F2FF46] transition-colors"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-gray-400 hover:text-[#F2FF46] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-[#F2FF46] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Rivertel Holdco, Inc.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">Questions?</span>
              <Button
                href="mailto:compliance@pipes.tech"
                variant="primary"
                className="text-sm px-6 py-2"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
