import {
  AuditLogIcon,
  BriefCaseIcon,
  FeesAndChargesIcon,
  FeesPricingIcon,
  GuarantorsIcon,
  HandShakeIcon,
  KarmaIcon,
  LoanRequestIcon,
  PiggyBankIcon,
  PreferencesIcon,
  ReportsIcon,
  SavingProductsIcon,
  ServiceAccountIcon,
  ServicesIcon,
  SettlementsIcon,
  TransactionsIcon,
  WhilelistIcon,
  UsersIcon,
  LoansIcon,
} from "@/assets";
export const navLinks = [
  {
    header: "Customers",
    links: [
      {
        url: "/users",
        icon: UsersIcon,
        label: "User",
      },
      {
        url: "/guarantors",
        icon: GuarantorsIcon,
        label: "Guarantors",
      },
      {
        url: "/loans",
        icon: LoansIcon,
        label: "Loans",
      },
      {
        url: "/decision-models",
        icon: HandShakeIcon,
        label: "Decision Models",
      },
      {
        url: "/savings",
        icon: PiggyBankIcon,
        label: "Savings",
      },
      {
        url: "/loan-requests",
        icon: LoanRequestIcon,
        label: "Loan Requests",
      },
      {
        url: "/whilelist",
        icon: WhilelistIcon,
        label: "Whitelist",
      },
      {
        url: "/karma",
        icon: KarmaIcon,
        label: "Karma",
      },
    ],
  },

  {
    header: "BUSINESSES",
    links: [
      {
        url: "/organization",
        icon: BriefCaseIcon,
        label: "Organization",
      },
      {
        url: "/loan-products",
        icon: LoanRequestIcon,
        label: "Loan Products",
      },
      {
        url: "/saving-products",
        icon: SavingProductsIcon,
        label: "Savings Products",
      },
      {
        url: "/fees-charge",
        icon: FeesAndChargesIcon,
        label: "Fees and Charges",
      },
      {
        url: "/transactions",
        icon: TransactionsIcon,
        label: "Transactions",
      },
      {
        url: "/services",
        icon: ServicesIcon,
        label: "Services",
      },
      {
        url: "/service-amount",
        icon: ServiceAccountIcon,
        label: "Service Account",
      },
      {
        url: "/settlements",
        icon: SettlementsIcon,
        label: "Settlements",
      },
      {
        url: "/reports",
        icon: ReportsIcon,
        label: "Reports",
      },
    ],
  },

  {
    header: "SETTINGS",
    links: [
      {
        url: "/preferences",
        icon: PreferencesIcon,
        label: "Preferences",
      },
      {
        url: "/fees-pricing",
        icon: FeesPricingIcon,
        label: "Fees and Pricing",
      },
      {
        url: "/audit-logs",
        icon: AuditLogIcon,
        label: "Audit Logs",
      },
    ],
  },
];
