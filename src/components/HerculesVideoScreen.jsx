import { useState, useRef } from "react";
import ScreenHeader from "../components/ScreenHeader";
import BottomNav from "../components/BottomNav";
import StepIndicator from "../components/StepIndicator";
import AiButton from "../components/AiButton";
import styles from "./HerculesVideoScreen.module.css";
import { IoIosPlay } from "react-icons/io";
import herculesVideo from "../assets/hercules-video.mp4";
import AiChat from "../components/AiChat";

const HerculesVideoScreen = () => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
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
      <ScreenHeader title="Hercules" />
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

      <AiButton onClick={() => setIsChatOpen(true)} />
      {isChatOpen && <AiChat onClose={() => setIsChatOpen(false)} />}

      <BottomNav />
    </div>
  );
};

export default HerculesVideoScreen;