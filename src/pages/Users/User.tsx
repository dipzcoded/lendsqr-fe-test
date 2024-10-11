import { columns, userData } from "./_components/column";
import { DataTable } from "./_components/data-table";
import UserSummaryData from "./_components/UserSummaryData";

export default function User() {
  return (
    <div className="grid grid-cols-1 gap-10">
      <UserSummaryData />
      {/* data table */}
      <DataTable columns={columns} data={userData} />
    </div>
  );
}
