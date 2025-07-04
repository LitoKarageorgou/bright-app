import { useState, useRef } from "react";
import ScreenHeader from "../components/ScreenHeader";
import BottomNav from "../components/BottomNav";
import StepIndicator from "../components/StepIndicator";
import { MdSmartToy } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import styles from "./HerculesVideoScreen.module.css";
import herculesVideo from "../assets/hercules-video.mp4";

const HerculesVideoScreen = () => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    video.play()
      .then(() => {
        setHasPlayed(true);
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      })
      .catch((err) => {
        console.error("Playback failed:", err);
      });
  };

  return (
    <div className={styles.container}>
      <ScreenHeader title="History" align="left" size="small" />
      <h2 className={styles.title}>Hercules</h2>

      <div className={styles.card}>
        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            src={herculesVideo}
            className={styles.video}
            controls
          />
          {!hasPlayed && (
            <button className={styles.playOverlay} onClick={handlePlayClick}>
              <IoIosPlay size={36} />
            </button>
          )}
        </div>

        <p className={styles.description}>
          Watch the video to learn about Hercules!
        </p>
        <StepIndicator current={0} />
      </div>

      <div className={styles.arrowWrapper}>
        <button className={styles.nextButton}>
          <span className={styles.arrow}>➜</span>
        </button>
      </div>

      <div className={styles.aiButton}>
        <MdSmartToy className={styles.aiIcon} />
      </div>

      <BottomNav />
    </div>
  );
};

export default HerculesVideoScreen;