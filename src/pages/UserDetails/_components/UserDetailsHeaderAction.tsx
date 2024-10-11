import { Button } from "@/components/ui/button";
import { GoBackIcon } from "@/assets";
import { useNavigate } from "react-router-dom";
import styles from "./UserDetailsHeaderAction.module.scss";

export default function UserDetailsHeaderAction() {
  const navigate = useNavigate();

  function onGoBack() {
    navigate("/users");
    localStorage.removeItem("userData");
  }

  return (
    <div className={styles.container}>
      <Button
        className="font-worksans bg-transparent hover:bg-transparent flex items-center gap-2 text-[#545F7D] text-base font-normal border-none outline-none px-0 sm:px-4 py-5 self-start"
        onClick={onGoBack}
      >
        <GoBackIcon />
        <span>Back to Users</span>
      </Button>

      <div className={styles.detailsContainer}>
        <h2 className={styles.title}>User Details</h2>
        <div className={styles.buttonGroup}>
          <Button className="border border-[#E4033B] px-5 py-6 bg-transparent hover:bg-transparent text-[#E4033B] font-semibold text-sm font-worksans rounded-lg">
            Blacklist User
          </Button>
          <Button className="border border-[#39CDCC] px-5 py-6 bg-transparent hover:bg-transparent text-[#39CDCC] font-semibold text-sm font-worksans rounded-lg">
            Activate User
          </Button>
        </div>
      </div>
    </div>
  );
}
