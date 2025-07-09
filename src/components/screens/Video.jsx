import { useState, useRef, useEffect } from "react";
import ScreenHeader from "../common/ScreenHeader";
import BottomNav from "../common/BottomNav";
import StepIndicator from "../common/StepIndicator";
import AiButton from "../common/AiButton";
import styles from "./Video.module.css";
import { IoIosPlay } from "react-icons/io";
import herculesVideo from "../../assets/hercules-video.mp4";
import AiChat from "../common/AiChat";
import { useNavigate } from "react-router-dom";

const Video = () => {
  const navigate = useNavigate();
  const [hasPlayed, setHasPlayed] = useState(false);
  const [videoWatched, setVideoWatched] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    video
      .play()
      .then(() => {
        setHasPlayed(true);
        // Fullscreen
        // if (video.requestFullscreen) {
        //   video.requestFullscreen();
        // } else if (video.webkitRequestFullscreen) {
        //   video.webkitRequestFullscreen();
        // } else if (video.msRequestFullscreen) {
        //   video.msRequestFullscreen();
        // }
      })
      .catch((err) => {
        console.error("Playback failed:", err);
      });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleProgress = () => {
      const current = video.currentTime;
      const total = video.duration;

      if (total && current / total >= 0.1 && !videoWatched) {
        setVideoWatched(true);
        console.log("🎉 85% watched — award XP now");
      }
    };

    const handlePause = () => setIsPaused(true);
    const handlePlay = () => setIsPaused(false);
    const handleFullscreenChange = () =>
      setIsFullscreen(!!document.fullscreenElement);

    video.addEventListener("timeupdate", handleProgress);
    video.addEventListener("pause", handlePause);
    video.addEventListener("play", handlePlay);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      video.removeEventListener("timeupdate", handleProgress);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("play", handlePlay);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [videoWatched]);

  return (
    <div className={styles.container}>
      <ScreenHeader title="Hercules" />
      <p className={styles.description}>Watch & learn about Hercules!</p>

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

        {videoWatched && isPaused && !isFullscreen && (
          <div className={styles.xpNotice}>🎉 +40 XP!</div>
        )}

        <StepIndicator current={0} />
      </div>

      <div className={styles.arrowWrapper}>
        <button
          className={styles.nextButton}
          onClick={() => navigate("/courses/history/hercules/story")}
        >
          <span className={styles.arrow}>➜</span>
        </button>
      </div>

      <AiButton onClick={() => setIsChatOpen(true)} />
      {isChatOpen && <AiChat onClose={() => setIsChatOpen(false)} />}

      <BottomNav />
    </div>
  );
};

export default Video;
