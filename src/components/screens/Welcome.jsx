import { useState, useEffect } from "react";
import styles from "./Welcome.module.css";
import logo from "../../assets/logo-sheep-no-bg.png";

const Welcome = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1600); // Show text after 1.6s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.welcomeScreen}>
      {!showText ? (
        <img src={logo} alt="Bright logo" className={styles.welcomeLogo} />
      ) : (
        <div className={styles.word}>
          <span>B</span>
          <span>r</span>
          <span>i</span>
          <span>g</span>
          <span>h</span>
          <span>t</span>
        </div>
      )}
    </div>
  );
};

export default Welcome;