import React from "react";
import styles from "./UserSummaryData.module.scss";
import {
  TotalUsersIcon,
  UserLoansIcon,
  UserSavingsIcon,
  ActiveUsersIcon,
} from "@/assets";

type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

interface CardData {
  Icon: IconType;
  title: string;
  value: number;
}

type UserSummaryCardProps = CardData & {
  index: number;
};

const UserSummaryCard: React.FC<UserSummaryCardProps> = ({
  Icon,
  title,
  value,
  index,
}) => (
  <div className={styles.card} data-testid={`summary-card-${index}`}>
    <Icon data-testid={`card-icon-${index}`} />
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle} data-testid={`card-title-${index}`}>{title}</h3>
      <h4 className={styles.cardValue} data-testid={`card-value-${index}`}>{value.toLocaleString()}</h4>
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
    <div className={styles.container} data-testid="user-summary">
      <h1 className={styles.title} data-testid="summary-title">Users</h1>
      <div className={styles.grid} data-testid="summary-grid">
        {cardData.map((data, index) => (
          <UserSummaryCard key={index} {...data} index={index} />
        ))}
      </div>
    </div>
  );
};

export default UserSummaryData;