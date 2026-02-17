export interface LegalPageCard {
  jurisdiction: string;
  flag: string;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

export interface LegalPageData {
  pageTitle: string;
  subtitle: string;
  cards: LegalPageCard[];
  showDisclaimer?: boolean;
}

// Terms of Service Page Data
export const TERMS_OF_SERVICE_DATA: LegalPageData = {
  pageTitle: "TERMS OF SERVICE",
  subtitle: "Please find the Terms of Service below:",
  showDisclaimer: true,
  cards: [
    // {
    //   jurisdiction: "United Arab Emirates",
    //   flag: "🇦🇪",
    //   title: "UAE Terms of Service",
    //   description:
    //     "Consumers are advised to read and understand the applicable Terms and Conditions when considering a product or service.",
    //   href: "/terms-and-conditions/uae",
    //   buttonText: "Read Full UAE ToS →",
    // },
    {
      jurisdiction: "European Economic Area",
      flag: "🇪🇺",
      title: "EEA Terms of Service",
      description:
        "Consumers are advised to read and understand the applicable Terms and Conditions when considering a product or service.",
      href: "/terms-and-conditions/eea",
      buttonText: "Read Full EEA ToS →",
    },
  ],
};

// Privacy Policy Page Data
export const PRIVACY_POLICY_DATA: LegalPageData = {
  pageTitle: "PRIVACY POLICY",
  subtitle: "Please find the Privacy Policy below:",
  showDisclaimer: false,
  cards: [
    // {
    //   jurisdiction: "United Arab Emirates",
    //   flag: "🇦🇪",
    //   title: "UAE Privacy Policy",
    //   description:
    //     "This Privacy Policy contains an overview of the collection, use, and disclosure of your personal data. We take privacy and protection of data seriously and are committed to handling personal information responsibly.",
    //   href: "/privacy-policy/uae",
    //   buttonText: "Read Full UAE Privacy Policy →",
    // },
    {
      jurisdiction: "European Economic Area",
      flag: "🇪🇺",
      title: "EEA Privacy Policy",
      description:
        "This Privacy Policy contains an overview of the collection, use, and disclosure of your personal data. We take privacy and protection of data seriously and are committed to handling personal information responsibly.",
      href: "/privacy-policy/eea",
      buttonText: "Read Full EEA Privacy Policy →",
    },
  ],
};

// Third Party Page Data
export interface ThirdPartyService {
  name: string;
  icon: string;
  subtitle: string;
  description: string;
  links: {
    tos: string;
    privacy: string;
  };
}

export const THIRD_PARTY_DATA = {
  pageTitle: "THIRD PARTY TERMS",
  subtitle: "Please find 3rd party ToS and PP:",
  services: [
    {
      name: "Bridge",
      icon: "🔗",
      subtitle: "Payment Services Partner",
      description:
        "Our services integrate with Bridge. Please review their terms of service and privacy policy.",
      links: {
        tos: "https://www.bridge.xyz/legal/row-user-terms/bridge-building-limited",
        privacy:
          "https://www.bridge.xyz/legal/row-user-terms/bridge-building-limited",
      },
    },
    {
      name: "Noah",
      icon: "🔗",
      subtitle: "Payment Services Partner",
      description:
        "Our services integrate with Noah. Please review their terms of service and privacy policy",
      links: {
        tos: "https://noah.com/en/terms-of-service",
        privacy:
          "https://noah.com/en/privacy-notice",
      },
    },
  ] as ThirdPartyService[],
  notice: {
    title: "Important Notice",
    description:
      "These are third-party services. By using our platform, you may also be subject to their terms and policies. We encourage you to review them carefully.",
  },
};
