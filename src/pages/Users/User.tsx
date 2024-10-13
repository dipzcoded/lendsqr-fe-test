import { useGetAllUsers } from "@/hooks/Users/useGetAllUsers.hook";
import { columns, User as Users } from "./_components/column";
import { DataTable } from "./_components/data-table";
import UserSummaryData from "./_components/UserSummaryData";
import { Button } from "@/components/ui/button";
import Loader from "../../components/custom/Loader";

export default function User() {
  const { users, isLoadingUsers, errorUsers, refetch } = useGetAllUsers();

  if (isLoadingUsers) {
    return <Loader />;
  }

  if (!isLoadingUsers && errorUsers) {
    return (
      <div className="bg-[#39CDCC] bg-opacity-25 px-3 py-4 rounded-lg font-worksans font-medium text-base flex justify-between gap-4 items-center" data-testid="error-message">
        <span>{errorUsers.message === "Request failed with status code 500" ?  "Having issues fetching users" : errorUsers.message}</span>
        <Button onClick={() => refetch()}>refetch</Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-14">
      {" "}
      {/* Use the styles from the SCSS module */}
      <UserSummaryData />
      {/* data table */}
      <DataTable columns={columns} data={users as Users[]} />
    </div>
  );
}
