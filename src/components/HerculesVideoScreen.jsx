import { useState, useRef } from "react";
import ScreenHeader from "../components/ScreenHeader";
import BottomNav from "../components/BottomNav";
import StepIndicator from "../components/StepIndicator";
import { MdSmartToy } from "react-icons/md";
import styles from "./HerculesVideoScreen.module.css";
import { IoIosPlay } from "react-icons/io";
import videoThumbnail from "../assets/video-thumbnail.png";
import herculesVideo from "../assets/hercules-video.mp4"; // adjust path if needed

const HerculesVideoScreen = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      const video = videoRef.current;
      if (!video) return;

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }

      video.play().catch((err) => {
        console.error("Autoplay blocked:", err);
      });
    }, 100);
  };

  return (
    <div className={styles.container}>
      <ScreenHeader title="History" align="left" size="small" />
      <h2 className={styles.title}>Hercules</h2>

      <div className={styles.card}>
        {!showVideo ? (
          <div className={styles.thumbnailWrapper} onClick={handlePlayClick}>
            <img
              src={videoThumbnail}
              alt="Hercules video thumbnail"
              className={styles.thumbnail}
            />
            <div className={styles.playOverlay}>
              <IoIosPlay size={28} />
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={herculesVideo}
            className={styles.video}
            controls
          />
        )}

        {!showVideo && (
          <p className={styles.description}>
            Watch the video to learn about Hercules!
          </p>
        )}

        {!showVideo && <StepIndicator current={0} />}
      </div>

      {!showVideo && (
        <>
          <div className={styles.arrowWrapper}>
            <button className={styles.nextButton}>
              <span className={styles.arrow}>Next</span>
            </button>
          </div>
          <div className={styles.aiButton}>
            <MdSmartToy className={styles.aiIcon} />
          </div>
        </>
      )}

      <BottomNav />
    </div>
  );
};

export default HerculesVideoScreen;
