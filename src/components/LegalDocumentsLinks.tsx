import Button from "./Button";

export default function LegalDocumentsLinks() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#F2FF46] transition-all group">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-3">🇦🇪</span>
          <div>
            <h3 className="text-xl font-bold text-white">UAE Region</h3>
            <p className="text-gray-400 text-sm">United Arab Emirates</p>
          </div>
        </div>
        <div className="space-y-3">
          <Button
            href="/terms-and-conditions/uae"
            variant="ghost"
            className="w-full"
          >
            Terms & Conditions →
          </Button>
          <Button
            href="/privacy-policy/uae"
            variant="ghost"
            className="w-full"
          >
            Privacy Policy →
          </Button>
        </div>
      </div> */}

      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#F2FF46] transition-all group">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-3">🇪🇺</span>
          <div>
            <h3 className="text-xl font-bold text-white">EEA Region</h3>
            <p className="text-gray-400 text-sm">European Economic Area</p>
          </div>
        </div>
        <div className="space-y-3">
          <Button
            href="/terms-and-conditions/eea"
            variant="ghost"
            className="w-full"
          >
            Terms & Conditions →
          </Button>
          <Button href="/privacy-policy/eea" variant="ghost" className="w-full">
            Privacy Policy →
          </Button>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#F2FF46] transition-all">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-3">🔗</span>
          <div>
            <h3 className="text-xl font-bold text-white">Third Party</h3>
            <p className="text-gray-400 text-sm">External Services</p>
          </div>
        </div>
        <Button href="/third-party" variant="primary" className="w-full">
          View Terms & Policies →
        </Button>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#F2FF46] transition-all">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-3">📄</span>
          <div>
            <h3 className="text-xl font-bold text-white">Licenses</h3>
            <p className="text-gray-400 text-sm">Open Source</p>
          </div>
        </div>
        <Button href="/licenses" variant="primary" className="w-full">
          View Licenses →
        </Button>
      </div>
    </div>
  );
}
