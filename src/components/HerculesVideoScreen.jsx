import ScreenHeader from "../components/ScreenHeader";
import BottomNav from "../components/BottomNav";
import styles from "./HerculesVideoScreen.module.css";
import videoThumbnail from "../assets/video-thumbnail.png";
import StepIndicator from "../components/StepIndicator";

const HerculesVideoScreen = () => {
  return (
    <div className={styles.container}>
      <ScreenHeader title="History" align="left" size="small" />
      <h2 className={styles.title}>Hercules</h2>
      <div className={styles.card}>
        <img
          src={videoThumbnail}
          alt="Hercules video"
          className={styles.thumbnail}
        />
        <p className={styles.description}>
          Watch the video to learn about Hercules!
        </p>

        {/* Step Indicator and Button */}
        <StepIndicator current={0} /> {/* First dot active */}
        <div className={styles.arrowWrapper}>
          <button className={styles.arrowButton}>
            {/* onClick={handleNext} */}
            <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default HerculesVideoScreen;
