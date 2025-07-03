import ScreenHeader from "../components/ScreenHeader";
import BottomNav from "../components/BottomNav";
import styles from "./HerculesVideoScreen.module.css";
import videoThumbnail from "../assets/video-thumbnail.png";

const HerculesVideoScreen = () => {
  return (
    <div className={styles.container}>
      <ScreenHeader title="History" />
      <h2 className={styles.title}>Hercules</h2>

      <div className={styles.card}>
        <img src={videoThumbnail} alt="Hercules video" className={styles.thumbnail} />
        <p className={styles.description}>Watch the video to learn about Hercules!</p>
      </div>

      {/* Optional: Pagination indicators and step icon */}
      <div className={styles.pagination}>
        <span className={styles.dot + " " + styles.active}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
      <div className={styles.iconStep}>🎬</div>

      <BottomNav />
    </div>
  );
};

export default HerculesVideoScreen;