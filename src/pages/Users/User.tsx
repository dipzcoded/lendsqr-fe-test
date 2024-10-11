import { columns, userData } from "./_components/column";
import { DataTable } from "./_components/data-table";
import UserSummaryData from "./_components/UserSummaryData";
import styles from './User.module.scss'; // Import the SCSS module

export default function User() {
  return (
    <div className={styles.grid}> {/* Use the styles from the SCSS module */}
      <UserSummaryData />
      {/* data table */}
      <DataTable columns={columns} data={userData} />
    </div>
  );
}
