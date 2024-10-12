import React from "react";
import styles from "./UserSummaryData.module.scss";
import {
  TotalUsersIcon,
  UserLoansIcon,
  UserSavingsIcon,
  ActiveUsersIcon,
} from "@/assets";

// Define the type for the icon component
type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

// Define the interface for the card data
interface CardData {
  Icon: IconType;
  title: string;
  value: number;
}

// Define props interface for UserSummaryCard
type UserSummaryCardProps = CardData;

const UserSummaryCard: React.FC<UserSummaryCardProps> = ({
  Icon,
  title,
  value,
}) => (
  <div className={styles.card}>
    <Icon />
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <h4 className={styles.cardValue}>{value.toLocaleString()}</h4>
    </div>
  </div>
);

const UserSummaryData: React.FC = () => {
  const cardData: CardData[] = [
    { Icon: TotalUsersIcon, title: "USERS", value: 2453 },
    { Icon: ActiveUsersIcon, title: "Active Users", value: 2453 },
    { Icon: UserLoansIcon, title: "Users with Loans", value: 12453 },
    { Icon: UserSavingsIcon, title: "Users with Savings", value: 102453 },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users</h1>
      <div className={styles.grid}>
        {cardData.map((data, index) => (
          <UserSummaryCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default UserSummaryData;
