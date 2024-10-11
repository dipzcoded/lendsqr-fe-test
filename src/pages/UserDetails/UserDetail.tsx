// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { User } from "../Users/_components/column";
import UserDetailsHeaderAction from "./_components/UserDetailsHeaderAction";
import UserDetailsHeader from "./_components/UserDetailsHeader";
import styles from './UserDetail.module.scss'; // Import the SCSS module

export default function UserDetail() {
  // const [userDataInfo] = useState<User | null>(() =>
  //   localStorage.getItem("userData")
  //     ? (JSON.parse(localStorage.getItem("userData")!) as User)
  //     : null
  // );

  // const { id } = useParams();
  return (
    <div className={styles.grid}> {/* Use the styles from the SCSS module */}
      <UserDetailsHeaderAction />
      <UserDetailsHeader />
    </div>
  );
}
