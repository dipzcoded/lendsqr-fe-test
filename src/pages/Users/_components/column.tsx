import { ColumnDef, FilterFn } from "@tanstack/react-table";
import {
  parseISO,
  format,
  isWithinInterval,
  startOfDay,
  endOfDay,
} from "date-fns";
import ColumnDropdownMenu from "./ColumnDropdownMenu";
import styles from "./column.module.scss";
import { DateRange } from "react-day-picker";

const dateRangeFilter: FilterFn<User> = (row, columnId, value: DateRange) => {
  if (!value || !value.from || !value.to) return true;
  const cellValue = row.getValue(columnId) as string;
  const dateValue = parseISO(cellValue);
  return isWithinInterval(dateValue, {
    start: startOfDay(value.from),
    end: endOfDay(value.to),
  });
};

export type User = {
  id: string;
  organization: string;
  userName: string;
  email: string;
  phoneNumber: string;
  date: string;
  status: string;
  personalInformation: PersonalInformation;
  educationEmployment: EducationEmployment;
  bankDetails: BankDetails;
  socials: Socials;
  guarantor: Guarantor;
};

export type BankDetails = {
  bankName: string;
  accountBalance: string;
  accountNumber: number;
};

export type EducationEmployment = {
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncomeRange: string;
  loanRepayment: string;
};

export type Guarantor = {
  fullName: string;
  relationship: string;
  phoneNumber: string;
  email: string;
};

export type PersonalInformation = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  bvn: number;
  gender: string;
  maritalStatus: string;
  children: number;
  typeOfResidence: string;
};

export type Socials = {
  facebook: string;
  twitter: string;
  linkedin: string;
};

enum Status {
  INACTIVE = "Inactive",
  PENDING = "Pending",
  BLACKLISTED = "Blacklisted",
  ACTIVE = "Active",
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "organization",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}>organization</span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("organization") as string;
      return <div className={styles.cellContent}>{value}</div>;
    },
  },
  {
    accessorKey: "userName",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}>Username</span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("userName") as string;
      return <div className={styles.cellContent}>{value}</div>;
    },
  },
  {
    accessorKey: "email",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}>Email</span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("email") as string;
      return <div className={styles.cellContent}>{value}</div>;
    },
  },
  {
    accessorKey: "phoneNumber",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}>Phone number</span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("phoneNumber") as string;
      return <div className={styles.cellContent}>{value}</div>;
    },
  },
  {
    accessorKey: "date",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}>Date joined</span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("date") as string;
      const parsedDate = parseISO(value);
      const formattedDate = format(parsedDate, "MMMM dd, yyyy hh:mm a");
      return <div className={styles.dateCell}>{formattedDate}</div>;
    },
    filterFn: dateRangeFilter,
  },
  {
    accessorKey: "status",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}>Status</span>
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("status") as Status;
      const statusClass = styles[value.toLowerCase()];
      return (
        <div className={styles.statusCell}>
          <div className={`${styles.statusPill} ${statusClass}`}>{value}</div>
        </div>
      );
    },
    filterFn: "equals",
  },
  {
    accessorKey: "action",
    header: () => (
      <div className={styles.columnHeader}>
        <span className={styles.headerText}></span>
      </div>
    ),
    cell: ({ row }) => {
      const user = row.original;
      return <ColumnDropdownMenu user={user} />;
    },
  },
];
