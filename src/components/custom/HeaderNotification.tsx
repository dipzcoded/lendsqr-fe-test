import { NotificationArrowDownIcon, NotificationBellIcon } from "@/assets";
import { Link } from "react-router-dom";
import styles from './HeaderNotification.module.scss'; // Import SCSS file

export default function HeaderNotification() {
  return (
    <div className={styles["header-notification"]}>
      <Link to="/dashboard/users">Docs</Link>
      <div className={styles["icon-container"]}>
        <NotificationBellIcon className={styles["bell-icon"]} />
        <div className={styles["user-container"]}>
          <img
            src="https://res.cloudinary.com/dbrlwhrg6/image/upload/v1728581171/image_4_aezmnf.png"
            alt="user profile pic"
          />
          <div className={styles["user-details"]}>
            <span>Adedeji</span>
            <NotificationArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
