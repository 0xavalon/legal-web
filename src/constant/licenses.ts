export interface License {
  jurisdiction: string;
  entity: string;
  licenseType: string;
  licenseNumber: string;
  registrationEntity: string;
  flag: string;
  isInnovationTesting?: boolean;
}

export const LICENSES: License[] = [
  {
    jurisdiction: "USA",
    entity: "Stably",
    licenseType: "FinCEN Registered Money Service Business (MSB)",
    licenseNumber: "31000230810249",
    registrationEntity: "Financial Crimes Enforcement Network",
    flag: "🇺🇸",
  },
  {
    jurisdiction: "Philippines",
    entity: "Dragonpay",
    licenseType: "Operator of Payment Systems (OPS)",
    licenseNumber: "OPSCOR-2020-0022",
    registrationEntity: "Bangko Sentral ng Pilipinas (BSP)",
    flag: "🇵🇭",
  },
  {
    jurisdiction: "Lithuania",
    entity: "UAB Wind Technologies",
    licenseType: "Virtual Asset Service Provider",
    licenseNumber: "Registration: 306288904",
    registrationEntity: "Financial Crime Investigation Service",
    flag: "🇱🇹",
  },
  {
    jurisdiction: "UAE",
    entity: "Wind Technologies",
    licenseType:
      "Payment Services Provider (Category 3D): Providing Money Services Advising or Arranging on Money Services",
    licenseNumber: "F008395",
    registrationEntity: "Dubai Financial Services Authority",
    flag: "🇦🇪",
    isInnovationTesting: true,
  },
];

export const UAE_NOTICE_SECTIONS = [
  {
    title: "Limited Testing Authorization",
    content:
      'The UAE licence is an "Innovation Testing Licence" and authorizes only the testing of services within approved parameters.',
  },
  {
    title: "Reduced Client Protections",
    content:
      "Because the licence is limited to testing, standard regulatory requirements and client protections do not apply. Clients may have reduced rights and may not be fully compensated if they experience losses while participating in service testing.",
  },
  {
    title: "Financial Transactions",
    content:
      "The Firm will not undertake or process any financial transactions until a designated Client Money Account has been opened and approved, as per the DFSA Testing Plan.",
  },
  {
    title: "Future Operations",
    content:
      "Upon completion of the testing phase and removal of licence restrictions, the Firm will execute and implement a new set of Terms & Conditions governing full-scale authorised operations.",
  },
];

export const COMPANY_INFO = {
  name: "UAB Wind Technologies",
  description:
    "UAB Wind Technologies is a technology company that works with multiple banks and payments partners to provide on-off ramps and crypto ↔ fiat services across various jurisdictions.",
};
