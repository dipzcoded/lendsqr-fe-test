import {
  TotalUsersIcon,
  UserLoansIcon,
  UserSavingsIcon,
  ActiveUsersIcon,
} from "@/assets";
import styles from './UserSummaryData.module.scss';

export default function UserSummaryData() {
  return (
    <div className={styles['user-summary']}>
      <h1 className={styles.title}>Users</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <TotalUsersIcon className={styles.icon} />
          <div className={styles['text-container']}>
            <h3 className={styles.label}>USERS</h3>
            <h4 className={styles.value}>2,453</h4>
          </div>
        </div>

        <div className={styles.card}>
          <ActiveUsersIcon className={styles.icon} />
          <div className={styles['text-container']}>
            <h3 className={styles.label}>Active Users</h3>
            <h4 className={styles.value}>2,453</h4>
          </div>
        </div>

        <div className={styles.card}>
          <UserLoansIcon className={styles.icon} />
          <div className={styles['text-container']}>
            <h3 className={styles.label}>Users with Loans</h3>
            <h4 className={styles.value}>12,453</h4>
          </div>
        </div>

        <div className={styles.card}>
          <UserSavingsIcon className={styles.icon} />
          <div className={styles['text-container']}>
            <h3 className={styles.label}>Users with Savings</h3>
            <h4 className={styles.value}>102,453</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
