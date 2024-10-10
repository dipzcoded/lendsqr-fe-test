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
        url: "/dashboard/user",
        icon: UsersIcon,
        label: "User",
      },
      {
        url: "/dashboard/guarantors",
        icon: GuarantorsIcon,
        label: "Guarantors",
      },
      {
        url: "/dashboard/loans",
        icon: LoansIcon,
        label: "Loans",
      },
      {
        url: "/dashboard/decision-models",
        icon: HandShakeIcon,
        label: "Decision Models",
      },
      {
        url: "/dashboard/savings",
        icon: PiggyBankIcon,
        label: "Savings",
      },
      {
        url: "/dashboard/loan-requests",
        icon: LoanRequestIcon,
        label: "Loan Requests",
      },
      {
        url: "/dashboard/whilelist",
        icon: WhilelistIcon,
        label: "Whitelist",
      },
      {
        url: "/dashboard/karma",
        icon: KarmaIcon,
        label: "Karma",
      },
    ],
  },

  {
    header: "BUSINESSES",
    links: [
      {
        url: "/dashboard/organization",
        icon: BriefCaseIcon,
        label: "Organization",
      },
      {
        url: "/dashboard/loan-products",
        icon: LoanRequestIcon,
        label: "Loan Products",
      },
      {
        url: "/dashboard/saving-products",
        icon: SavingProductsIcon,
        label: "Savings Products",
      },
      {
        url: "/dashboard/fees-charge",
        icon: FeesAndChargesIcon,
        label: "Fees and Charges",
      },
      {
        url: "/dashboard/transactions",
        icon: TransactionsIcon,
        label: "Transactions",
      },
      {
        url: "/dashboard/services",
        icon: ServicesIcon,
        label: "Services",
      },
      {
        url: "/dashboard/service-amount",
        icon: ServiceAccountIcon,
        label: "Service Account",
      },
      {
        url: "/dashboard/settlements",
        icon: SettlementsIcon,
        label: "Settlements",
      },
      {
        url: "/dashboard/reports",
        icon: ReportsIcon,
        label: "Reports",
      },
    ],
  },

  {
    header: "BUSINESSES",
    links: [
      {
        url: "/dashboard/preferences",
        icon: PreferencesIcon,
        label: "Preferences",
      },
      {
        url: "/dashboard/fees-pricing",
        icon: FeesPricingIcon,
        label: "Fees and Pricing",
      },
      {
        url: "/dashboard/audit-logs",
        icon: AuditLogIcon,
        label: "Audit Logs",
      },
    ],
  },
];
