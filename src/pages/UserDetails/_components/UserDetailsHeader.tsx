import {
  UserProfileIcon,
  FilledGoldenStarIcon,
  StrokedGoldenStarIcon,
} from "@/assets";
import { useCallback, useState } from "react";
import GeneralDetails from "./tab/GeneralDetails";
import { User } from "@/types/api.type";

const tabs = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

type Props = {
  userInfo: User;
};

export default function UserDetailsHeader({ userInfo }: Props) {
  const [currentTab] = useState(0);

  const displayTabContent = useCallback(() => {
    if (currentTab === 0) {
      return <GeneralDetails userInfo={userInfo} />;
    } else {
      return null;
    }
  }, [currentTab, userInfo]);

  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="shadow-userDataShadow bg-white border border-[#213F7D0F] rounded-md flex flex-col gap-10 px-8 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="bg-[#213F7D] bg-opacity-[16%] flex items-center justify-center max-sm:self-start p-8 lg:p-12 rounded-full">
            <UserProfileIcon className="scale-110 lg:scale-150 text-[#213F7D]" />
          </div>
          <div className="divide-y-[1px] sm:divide-x-[1px] sm:divide-y-0 divide-[#545F7D] divide-opacity-30  flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col gap-2 font-worksans">
              <h3 className="text-[#213F7D] font-medium text-xl lg:text-2xl">
                {userInfo?.personalInformation.fullName}
              </h3>
              <p className="text-sm font-normal text-[#545F7D]">
                {userInfo?.id}
              </p>
            </div>
            <div className="flex flex-col sm:items-center sm:justify-center gap-3 py-2 sm:py-0 sm:px-3 font-worksans">
              <h3 className="text-sm font-medium text-[#545F7D]">
                User’s Tier
              </h3>
              <div className="flex items-center gap-[2px]">
                <FilledGoldenStarIcon className="scale-110" />
                <StrokedGoldenStarIcon />
                <StrokedGoldenStarIcon />
              </div>
            </div>
            <div className="flex flex-col py-2 sm:py-0 sm:px-3 gap-3 font-worksans">
              <h4 className="font-medium text-[#213F7D] text-xl lg:text-2xl">
              ₦{Number(
                  userInfo?.bankDetails.accountBalance.split("₦")[1]
                ).toLocaleString("en-NG", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h4>
              <p className="font-normal text-sm text-[#213F7D]">
                {userInfo?.bankDetails.accountNumber}/{userInfo?.bankDetails.bankName}
              </p>
            </div>
          </div>
        </div>
        {/* tabs */}
        <div className="overflow-x-auto flex justify-around gap-4 sm:gap-6">
          {tabs.map((tab, i) => (
            <div
              key={i}
              className={`font-worksans text-sm lg:text-base font-normal cursor-pointer px-2 lg:px-4 transition sm:pb-1 ${
                currentTab === i
                  ? "text-[#39CDCC] border-b-[3px] border-[#39CDCC]"
                  : "text-[#000000CC]"
              }`}
            >
              <span>{tab}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="shadow-userDataShadow bg-white p-8 border border-[#213F7D0F] rounded-md">
        {/* tabs content */}

        {displayTabContent()}
      </div>
    </div>
  );
}
