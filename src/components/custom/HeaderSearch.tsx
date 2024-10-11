import { SearchIcon } from "@/assets";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import styles from './HeaderSearch.module.scss'; // Import SCSS file

export default function HeaderSearch() {
  return (
    <form className={styles["header-search"]}>
      <Input
        className={styles.input}
        placeholder="Search for anything"
      />
      <Button
        className={styles["search-button"]}
        type="submit"
      >
        <SearchIcon />
      </Button>
    </form>
  );
}
