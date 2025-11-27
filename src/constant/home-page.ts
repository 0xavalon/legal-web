export interface HeroSection {
  title: string;
  subtitle: string;
  buttons: {
    label: string;
    href: string;
    variant: "primary" | "secondary";
    target?: string;
  }[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface HomePageData {
  hero: HeroSection;
  sections: {
    disclaimer: {
      title: string;
    };
    legalDocuments: {
      title: string;
      subtitle: string;
    };
    features: {
      title: string;
      items: Feature[];
    };
  };
}

export const HOME_PAGE_DATA: HomePageData = {
  hero: {
    title: "LEGAL DOCUMENTS",
    subtitle:
      "Fin, Inc. is the Delaware holding company that operates Fin.com platform. All regulated activities are performed only through its licensed subsidiaries—Wind Technologies Limited (UAE) and Wind Technologies UAB (Lithuania)",
    buttons: [
      {
        label: "Contact Compliance",
        href: "mailto:compliance@fin.com",
        variant: "primary",
      },
      {
        label: "Visit Main Site",
        href: "https://fin.com",
        variant: "secondary",
        target: "_blank",
      },
    ],
  },
  sections: {
    disclaimer: {
      title: "IMPORTANT NOTICE",
    },
    legalDocuments: {
      title: "ACCESS LEGAL DOCUMENTS",
      subtitle: "Choose your region to view the applicable terms and policies",
    },
    features: {
      title: "KEY FEATURES",
      items: [
        {
          icon: "🌍",
          title: "GLOBAL COMPLIANCE",
          description:
            "Region-specific terms for EEA markets, ensuring full regulatory compliance",
        },
        {
          icon: "🔒",
          title: "TRANSPARENT POLICIES",
          description:
            "Clear privacy policies and terms of service to protect your rights",
        },
        {
          icon: "📄",
          title: "OPEN SOURCE LICENSES",
          description:
            "Full transparency on third-party dependencies and licensing",
        },
      ],
    },
  },
};
