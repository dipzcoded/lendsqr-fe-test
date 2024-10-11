import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import styles from './AppLayout.module.scss'; // Import SCSS file

export default function AppLayout() {
  return (
    <div className={styles["app-layout"]}>
      <Sidebar />
      <Header />
      <main className={styles["main-content"]}>
        <Outlet />
      </main>
    </div>
  );
}
