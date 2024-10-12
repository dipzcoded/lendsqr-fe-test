
import { CircleAlert } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from './PageNotFound.module.scss';

export default function PageNotFound() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.alertBox}>
        <div className={styles.alertContent}>
          <CircleAlert color="#E4033B" size={50} />
          <span className={styles.alertText}>
            Page not found:{" "}
            {pathname.length === 6
              ? pathname
              : `${pathname.substring(0, 10)}...`}
          </span>
        </div>

        <button
          onClick={() => navigate("/signin")}
          className={styles.goBackButton}
        >
          GoBack
        </button>
      </div>
    </div>
  );
}
