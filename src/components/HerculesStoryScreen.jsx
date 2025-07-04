import { useState } from "react";
import ScreenHeader from "../components/ScreenHeader";
import BottomNav from "../components/BottomNav";
import StepIndicator from "../components/StepIndicator";
import AiButton from "../components/AiButton";
import styles from "./HerculesStoryScreen.module.css";
import AiChat from "../components/AiChat";

const summaryText = "Hercules was the strongest hero of Ancient Greece.";
const fullChapterText = `Hercules—called Herakles by the Greeks—was no ordinary hero. He was born from Zeus and a mortal woman, Alcmene... [trimmed for brevity]`;

const HerculesStoryScreen = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className={styles.container}>
      <ScreenHeader title="Hercules" />
      <p className={styles.description}>Listen & read the story of Hercules!</p>

      <div className={styles.card}>
        <div className={styles.tabHeader}>
          <button
            className={activeTab === "summary" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("summary")}
          >
            Summary
          </button>
          <button
            className={activeTab === "full" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("full")}
          >
            Full chapter
          </button>
        </div>

        <p className={styles.storyText}>
          {activeTab === "summary" ? summaryText : fullChapterText}
        </p>

        <div className={styles.controls}>
          <button>⟲</button>
          <button>▶️</button>
          <button>🔁</button>
        </div>

        <StepIndicator current={1} />
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

export default HerculesStoryScreen;
