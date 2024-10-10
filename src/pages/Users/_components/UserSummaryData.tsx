import {
  TotalUsersIcon,
  UserLoansIcon,
  UserSavingsIcon,
  ActiveUsersIcon,
} from "@/assets";

export default function UserSummaryData() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-medium font-worksans text-[#213F7D] text-2xl">
        Users
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col gap-4 bg-white border border-[#213F7D0F] shadow-userDataShadow rounded-md px-8 py-6">
          <TotalUsersIcon />

          <div className="flex flex-col gap-2">
            <h3 className="text-[#545F7D] font-worksans font-medium text-sm uppercase">
              USERS
            </h3>
            <h4 className="text-2xl text-[#213F7D] font-semibold">2,453</h4>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-white border border-[#213F7D0F] shadow-userDataShadow rounded-md px-8 py-6">
          <ActiveUsersIcon />

          <div className="flex flex-col gap-2">
            <h3 className="text-[#545F7D] font-worksans font-medium text-sm uppercase">
              Active Users
            </h3>
            <h4 className="text-2xl text-[#213F7D] font-semibold">2,453</h4>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-white border border-[#213F7D0F] shadow-userDataShadow rounded-md px-8 py-6">
          <UserLoansIcon />

          <div className="flex flex-col gap-2">
            <h3 className="text-[#545F7D] font-worksans font-medium text-sm uppercase">
              Users with Loans
            </h3>
            <h4 className="text-2xl text-[#213F7D] font-semibold">12,453</h4>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-white border border-[#213F7D0F] shadow-userDataShadow rounded-md px-8 py-6">
          <UserSavingsIcon />

          <div className="flex flex-col gap-2">
            <h3 className="text-[#545F7D] font-worksans font-medium text-sm uppercase">
              Users with Savings
            </h3>
            <h4 className="text-2xl text-[#213F7D] font-semibold">102,453</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
