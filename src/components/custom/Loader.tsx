import { Loader as LoaderIcon } from "lucide-react";
import styles from './Loader.module.scss'; // Import the SCSS module

export default function Loader() {
  return (
    <div className={styles.container} data-testid="loader">
      <LoaderIcon className={styles.loaderIcon} />
    </div>
  );
}
