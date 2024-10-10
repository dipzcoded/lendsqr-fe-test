import { NotificationArrowDownIcon, NotificationBellIcon } from "@/assets";
import { Link } from "react-router-dom";

export default function HeaderNotification() {
  return (
    <div className=" items-center gap-5 hidden sm:flex">
      <Link to="/dashboard" className="underline text-[#213F7D] text-base">
        Docs
      </Link>
      <div className="flex items-center gap-5">
        <NotificationBellIcon  className="cursor-pointer"/>
        <div className="flex items-center gap-3.5">
          <img
            src="https://res.cloudinary.com/dbrlwhrg6/image/upload/v1728581171/image_4_aezmnf.png"
            className="rounded-full"
            alt="user profile pic"
          />

          <div className="flex items-center gap-2 cursor-pointer">
            <span className="font-medium text-base text-[#213F7D]">Adedeji</span>
            <NotificationArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
