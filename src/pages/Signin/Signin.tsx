// Import the SCSS module
import styles from "./Signin.module.scss";

import { Logo, SketchImg } from "@/assets";
import AuthenticationForm from "./_components/AuthenticationForm";

export default function Signin() {
  return (
    <div className={styles.container}>
      {/* images */}
      <Logo className={styles.logo} />
      <div className={styles['image-container']}>
        <SketchImg />
      </div>
      {/* form */}
      <div className={styles['form-container']}>
        <AuthenticationForm />
      </div>
    </div>
  );
}
