import { useState, useRef, useEffect } from "react";
import ScreenHeader from "../components/ScreenHeader";
import BottomNav from "../components/BottomNav";
import StepIndicator from "../components/StepIndicator";
import { MdSmartToy } from "react-icons/md";
import styles from "./HerculesVideoScreen.module.css";
import { IoIosPlay } from "react-icons/io";
import videoThumbnail from "../assets/video-thumbnail.png";
import herculesVideo from "../assets/hercules-video.mp4";

const HerculesVideoScreen = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [fullscreenExited, setFullscreenExited] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setShowVideo(true);
    setFullscreenExited(false);

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

  // Detect when fullscreen exits
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;

      if (!isFullscreen && showVideo) {
        setFullscreenExited(true);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("msfullscreenchange", handleFullscreenChange);
    };
  }, [showVideo]);

  const showExtras = fullscreenExited || !showVideo;

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

        {showExtras && (
          <>
            <p className={styles.description}>
              Watch the video to learn about Hercules!
            </p>
            <StepIndicator current={0} />
          </>
        )}
      </div>

      {showExtras && (
        <>
          <div className={styles.arrowWrapper}>
            <button className={styles.nextButton}>
              <span className={styles.arrow}>➜</span>
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