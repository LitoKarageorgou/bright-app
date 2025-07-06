import ScreenHeader from "./ScreenHeader";
import BottomNav from "./BottomNav";
import AiChat from "./AiChat";
import AiButton from "./AiButton";
import styles from "./LessonStepLayout.module.css";
import { useState } from "react";

const LessonStepLayout = ({ title, children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className={styles.container}>
      <ScreenHeader title={title} />

      {children}

      <AiButton onClick={() => setIsChatOpen(true)} />
      {isChatOpen && <AiChat onClose={() => setIsChatOpen(false)} />}

      <BottomNav />
    </div>
  );
};

export default LessonStepLayout;
