// Import the SCSS module
import styles from "./AuthenticationForm.module.scss";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthenticationForm() {
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

  return (
    <form className={styles.form}>
      {/* Heading */}
      <div className={styles["heading-container"]}>
        <h1 className={styles.heading}>Welcome!</h1>
        <p className={styles.subheading}>Enter details to login.</p>
      </div>

      {/* Input Section */}
      <div className={styles["input-section"]}>
        <div className={styles["input-group"]}>
          <div className={styles["input-field"]}>
            <Input type="email" className={styles.input} placeholder="Email" />
          </div>
          <div className={styles["input-field"]}>
            <Input
              type={showPassword ? "text" : "password"}
              className={styles.input}
              placeholder="Password"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className={styles["toggle-password"]}
            >
              {showPassword ? "Close" : "Show"}
            </span>
          </div>
          <p className={styles["forgot-password"]}>Forgot Password?</p>
        </div>
        <Button
          className="bg-[#39CDCC] text-white hover:bg-[#39CDCC] rounded-lg py-6 px-3.5 text-sm font-semibold"
          onClick={() => navigate("/users")}
        >
          LOG IN
        </Button>
      </div>
    </form>
  );
}
