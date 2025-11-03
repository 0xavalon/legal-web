// Disclaimer Component Data
export interface DisclaimerPoint {
  number: string;
  content: {
    prefix: string;
    companyName?: string;
    licenseType?: string;
    suffix: string;
    highlights: string[];
  };
}

export interface DisclaimerData {
  yellow: {
    emoji: string;
    title: string;
    points: DisclaimerPoint[];
  };
  red: {
    emoji: string;
    title: string;
    points: DisclaimerPoint[];
  };
}

export const DISCLAIMER_DATA: DisclaimerData = {
  yellow: {
    emoji: "⚠️",
    title: "Disclaimer",
    points: [
      {
        number: "(i)",
        content: {
          prefix: "The Licence held by",
          companyName: "Wind Technologies Ltd",
          licenseType: "Innovation Testing Licence (ITL)",
          suffix:
            "issued by the Dubai Financial Services Authority (DFSA), which authorises the Firm",
          highlights: [
            "solely to test its services",
            "within the parameters approved under the DFSA Testing Plan (Phase 1).",
          ],
        },
      },
      {
        number: "(ii)",
        content: {
          prefix: "As the Licence is restricted to testing, certain",
          suffix:
            "during this phase. Participants in the testing environment acknowledge that they may have",
          highlights: [
            "standard regulatory requirements and client protections may not apply",
            "reduced rights",
            "may not be fully compensated",
            "for any losses incurred as part of the testing activities.",
          ],
        },
      },
      {
        number: "(iii)",
        content: {
          prefix: "The Firm will",
          suffix: "until a designated",
          highlights: [
            "not undertake or process any financial transactions",
            "Client Money Account",
            "has been opened and approved, as per the DFSA Testing Plan.",
          ],
        },
      },
      {
        number: "(iv)",
        content: {
          prefix: "Upon completion of the testing phase and",
          suffix:
            "governing the full-scale authorised operations. All clients will be required to review and accept the revised Terms & Conditions prior to continuing any services.",
          highlights: [
            "removal of licence restrictions",
            "new set of Terms & Conditions",
          ],
        },
      },
    ],
  },
  red: {
    emoji: "🚨",
    title: "Disclaimer",
    points: [
      {
        number: "(i)",
        content: {
          prefix: "The Licence held by",
          companyName: "Wind Technologies Ltd",
          licenseType: "Innovation Testing Licence (ITL)",
          suffix:
            "issued by the Dubai Financial Services Authority (DFSA), which authorises the Firm",
          highlights: [
            "solely to test its services",
            "within the parameters approved under the DFSA Testing Plan (Phase 1).",
          ],
        },
      },
      {
        number: "(ii)",
        content: {
          prefix: "As the Licence is restricted to testing, certain",
          suffix:
            "during this phase. Participants in the testing environment acknowledge that they may have",
          highlights: [
            "standard regulatory requirements and client protections may not apply",
            "reduced rights",
            "may not be fully compensated",
            "for any losses incurred as part of the testing activities.",
          ],
        },
      },
      {
        number: "(iii)",
        content: {
          prefix: "The Firm will",
          suffix: "until a designated",
          highlights: [
            "not undertake or process any financial transactions",
            "Client Money Account",
            "has been opened and approved, as per the DFSA Testing Plan.",
          ],
        },
      },
      {
        number: "(iv)",
        content: {
          prefix: "Upon completion of the testing phase and",
          suffix:
            "governing the full-scale authorised operations. All clients will be required to review and accept the revised Terms & Conditions prior to continuing any services.",
          highlights: [
            "removal of licence restrictions",
            "new set of Terms & Conditions",
          ],
        },
      },
    ],
  },
};

// Legal Documents Links Component Data
export interface RegionLink {
  emoji: string;
  title: string;
  description: string;
  links: {
    label: string;
    href: string;
    variant: "ghost" | "primary";
  }[];
  enabled: boolean;
}

export const LEGAL_DOCUMENTS_LINKS_DATA: RegionLink[] = [
  {
    emoji: "🇦🇪",
    title: "UAE Region",
    description: "United Arab Emirates",
    links: [
      {
        label: "Terms & Conditions →",
        href: "/terms-and-conditions/uae",
        variant: "ghost",
      },
      {
        label: "Privacy Policy →",
        href: "/privacy-policy/uae",
        variant: "ghost",
      },
    ],
    enabled: false, // Currently commented out in component
  },
  {
    emoji: "🇪🇺",
    title: "EEA Region",
    description: "European Economic Area",
    links: [
      {
        label: "Terms & Conditions →",
        href: "/terms-and-conditions/eea",
        variant: "ghost",
      },
      {
        label: "Privacy Policy →",
        href: "/privacy-policy/eea",
        variant: "ghost",
      },
    ],
    enabled: true,
  },
  {
    emoji: "🔗",
    title: "Third Party",
    description: "External Services",
    links: [
      {
        label: "View Terms & Policies →",
        href: "/third-party",
        variant: "primary",
      },
    ],
    enabled: true,
  },
  {
    emoji: "📄",
    title: "Licenses",
    description: "Open Source",
    links: [
      {
        label: "View Licenses →",
        href: "/licenses",
        variant: "primary",
      },
    ],
    enabled: true,
  },
];

// Footer Component Data
export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

export interface FooterData {
  sections: FooterSection[];
  copyright: string;
  contact: {
    label: string;
    buttonText: string;
    email: string;
  };
}

export const FOOTER_DATA: FooterData = {
  sections: [
    {
      title: "About",
      links: [
        {
          label: "Home",
          href: "/",
          external: true,
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          label: "Help",
          href: "https://help.fin.com",
          external: true,
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          label: "Terms of Service",
          href: "/terms-and-conditions",
        },
        {
          label: "Privacy Policy",
          href: "/privacy-policy",
        },
      ],
    },
  ],
  copyright: `© Fin Inc, ${new Date().getFullYear()}`,
  contact: {
    label: "Questions?",
    buttonText: "Contact Us",
    email: "mailto:compliance@fin.com",
  },
};

// Navbar Component Data
export interface NavbarData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const NAVBAR_DATA: NavbarData = {
  logo: {
    src: "/logo.svg",
    alt: "Fin Logo",
    width: 50,
    height: 40,
  },
  navigation: [
    {
      label: "Home",
      href: "/",
    },
  ],
};
