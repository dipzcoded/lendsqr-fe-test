import { Logo } from "@/assets";
import MobileNav from "./MobileNav";
import HeaderSearch from "./HeaderSearch";
import HeaderNotification from "./HeaderNotification";
import styles from "./Header.module.scss"; // Import the SCSS file

export default function Header() {
  return (
    <header className={styles.header}>
      <MobileNav />
      <div className={styles["nav-container"]}>
        <Logo className={styles.logo} />
        <div className={styles["nav-content"]}>
          <HeaderSearch />
          <HeaderNotification />
        </div>
      </div>
    </header>
  );
}
