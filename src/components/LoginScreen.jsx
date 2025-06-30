import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginScreen.module.css";
import sheep from "../assets/sheep-right.png";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("username", username);
      navigate("/home"); // or next screen
    }
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
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

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
