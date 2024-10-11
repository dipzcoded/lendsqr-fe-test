import { Button } from "@/components/ui/button";
import { GoBackIcon } from "@/assets";
import { useNavigate } from "react-router-dom";

export default function UserDetailsHeaderAction() {
  const navigate = useNavigate();
  function onGoBack() {
    navigate("/users");
    localStorage.removeItem("userData");
  }
  return (
    <div className="flex flex-col  gap-4">
      <Button className=" font-worksans bg-transparent hover:bg-transparent flex items-center gap-2 text-[#545F7D] text-base font-normal border-none outline-none  px-0 sm:px-4 py-5 self-start" onClick={onGoBack}>
        <GoBackIcon />
        <span>Back to Users</span>
      </Button>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-4 sm:justify-between">
        <h2 className="font-medium text-[#213F7D] text-2xl">User Details</h2>
        <div className="flex gap-4">
          <Button className="border border-[#E4033B] px-5 py-6 bg-transparent hover:bg-transparent text-[#E4033B] font-semibold text-sm font-worksans rounded-lg">Blacklist User</Button>
          <Button className="border border-[#39CDCC] px-5 py-6 bg-transparent hover:bg-transparent text-[#39CDCC] font-semibold text-sm font-worksans rounded-lg">Activate User</Button>
        </div>
      </div>
    </div>
  );
}
