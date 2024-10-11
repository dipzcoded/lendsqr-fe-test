import { useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../Users/_components/column";
import UserDetailsHeaderAction from "./_components/UserDetailsHeaderAction";
import UserDetailsHeader from "./_components/UserDetailsHeader";
import styles from "./UserDetail.module.scss"; // Import the SCSS module
import UserNotFound from "./_components/UserNotFound";

export default function UserDetail() {
  const [userDataInfo] = useState<User | null>(() =>
    localStorage.getItem("userData")
      ? (JSON.parse(localStorage.getItem("userData")!) as User)
      : null
  );

  const { id } = useParams();
  const user = userDataInfo?.id === id ? userDataInfo : null;

  return (
    <div className={styles.grid}>
      {" "}
      {/* Use the styles from the SCSS module */}
      <UserDetailsHeaderAction  userFound={!!user}/>
      {!user ? (
       <UserNotFound />
      ) : (
        <UserDetailsHeader userInfo={user} />
      )}
    </div>
  );
}
