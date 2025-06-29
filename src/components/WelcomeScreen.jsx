import { useEffect } from "react";
import styles from "./WelcomeScreen.module.css";
import logo from "../assets/logo-sheep-no-bg.png";

const WelcomeScreen = () => {
  useEffect(() => {
    const audio = new Audio("/sheep-sound.mp3"); // from public folder
    audio.play();
  }, []);

  return (
    <div className={styles.welcomeScreen}>
      <img src={logo} alt="Bright logo" className={styles.welcomeLogo} />
      <div className={styles.word}>
        <span>B</span>
        <span>r</span>
        <span>i</span>
        <span>g</span>
        <span>h</span>
        <span>t</span>
      </div>
    </div>
  );
};

export default WelcomeScreen;
