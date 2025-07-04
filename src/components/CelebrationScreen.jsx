import ScreenHeader from "../components/ScreenHeader";
import BottomNav from "../components/BottomNav";
import styles from "./CelebrationScreen.module.css";
import sheepCelebration from "../assets/sheep-celebrating.png";
import { useNavigate } from "react-router-dom";
import AiChat from "../components/AiChat";
import { useState, useEffect } from "react";

const CelebrationScreen = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState(null);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <ScreenHeader title="Well done!" />

      <div className={styles.card}>
        <img
          src={sheepCelebration}
          alt="Celebration"
          className={styles.image}
        />
        <p className={styles.message}>
          Congratulations! You earned <br />
          <strong>110/120 XP 🎉</strong>
        </p>
      </div>

      <button
        className={styles.greenButton}
        onClick={() => navigate("/courses/history")}
      >
        Learn another chapter
      </button>

      <button
        className={styles.purpleButton}
        onClick={() => {
          setInitialPrompt(
            "Can you suggest some interactive games, like 'True or False' or 'Blue Stories', based on the chapter I just completed?"
          );
          setIsChatOpen(true);
        }}
      >
        Play more games
      </button>

      {isChatOpen && (
        <AiChat
          onClose={() => {
            setIsChatOpen(false);
            setInitialPrompt(null);
          }}
          initialPrompt={initialPrompt}
        />
      )}

      <BottomNav />
    </div>
  );
};

export default CelebrationScreen;
