import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  DashBoardIcon,
  BriefCaseIcon,
  ArrowDown2Icon,
  SignoutIcon,
} from "@/assets";
import { navLinks } from "@/constants/navlinks.constant";
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  const location = useLocation(); 
  const navigate = useNavigate()
  const { pathname } = location;

  return (
    <aside className={styles.sidebar}  id="custom-scroll">
      <nav className={styles.nav}>
      <div className={styles["nav-group"]}>
        <div className={styles["nav-item"]}>
          <BriefCaseIcon className="opacity-80" />
          <div className={styles["switch-organization"]}>
            <span>Switch Organization</span>
            <ArrowDown2Icon className={styles["arrow-icon"]} />
          </div>
        </div>
        <div className={styles["dashboard-link"]}>
          <DashBoardIcon />
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>

        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <div className="flex flex-col gap-5" key={link.header}>
              <h3 className="pl-6 font-worksans font-medium text-[#545F7D] text-sm uppercase">
                {link.header}
              </h3>
              <div className="flex flex-col gap-2">
                {link.links.map((navlink) => (
                  <NavLink
                    to={navlink.url}
                    key={navlink.label}
                    className={({ isActive }) =>
                      `flex items-center relative p-3.5 font-worksans text-base text-[#213F7D] hover:bg-opacity-[6%] hover:bg-[#39CDCC] hover:opacity-100 transition pl-6 gap-3 ${
                        isActive
                          ? "opacity-100 bg-opacity-[6%] bg-[#39CDCC] "
                          : "opacity-60"
                      }`
                    }
                  >
                    {pathname.toLowerCase().includes(navlink.url.toLowerCase()) && (
                      <div className="bg-[#39CDCC] h-full w-1.5 absolute left-0" />
                    )}
                    <navlink.icon />
                    <span className="font-worksans">{navlink.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles["logout-section"]}>
      <div className={styles["logout-button"]} onClick={() => navigate("/signin")}>
        <SignoutIcon />
        <span className={styles["logout-text"]}>Logout</span>
      </div>
    </div>
      </nav>
    </aside>
  );
}
