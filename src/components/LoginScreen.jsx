import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginScreen.module.css";
import sheep from "../assets/sheep-right.png";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Email validation
    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!email.includes("@")) {
      setEmailError("Enter a valid email address.");
      valid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    }

    if (!valid) return;

    localStorage.setItem("username", email);
    navigate("/grades");
  };

  return (
    <div className={styles.loginScreen}>
      <div className={styles.header}>
        <img src={sheep} alt="Sheep logo" className={styles.logo} />
        <h2 className={styles.title}>Sign In</h2>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className={styles.error}>{emailError || "\u00A0"}</p>

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={styles.error}>{passwordError || "\u00A0"}</p>

        <div className={styles.footer}>
          <span className={styles.signupText}>
            Don't have an account? <a href="#">Sign up</a>
          </span>
          <button type="submit" className={styles.arrowButton}>
            ➜
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
