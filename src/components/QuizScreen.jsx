import { useState, useEffect } from "react";
import ScreenHeader from "./ScreenHeader";
import BottomNav from "./BottomNav";
import StepIndicator from "./StepIndicator";
import AiButton from "./AiButton";
import AiChat from "./AiChat";
import styles from "./QuizScreen.module.css";
import { useNavigate } from "react-router-dom";

const HerculesQuizScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const question = "How many labors did Hercules complete?";
  const options = ["5", "10", "12", "15"];
  const correctIndex = 2;

  const handleSelect = (index) => {
    setSelected(index);
    setShowFeedback(true);
  };

  const handleFinish = () => {
    navigate("/courses/history/hercules/celebration");
  };

  return (
    <div className={styles.container}>
      <ScreenHeader title="Hercules" />
      <p className={styles.description}>Can you answer the questions?</p>

      <div className={styles.card}>
        <p className={styles.question}>{question}</p>
        <div className={styles.options}>
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`${styles.optionButton} ${
                showFeedback
                  ? i === correctIndex
                    ? styles.correct
                    : i === selected
                    ? styles.incorrect
                    : ""
                  : ""
              }`}
              disabled={showFeedback}
            >
              {opt}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className={styles.xpNotice}>
            {selected === correctIndex ? "✔ Correct! +40 XP" : "✖ Oops!"}
          </div>
        )}

        <StepIndicator current={2} />
      </div>

      <div className={styles.arrowWrapper}>
        <button
          className={styles.arrowButton + " " + styles.rightArrowButton}
          onClick={handleFinish}
        >
          <span className={styles.arrow}>End</span>
        </button>
      </div>

      <AiButton onClick={() => setIsChatOpen(true)} />
      {isChatOpen && <AiChat onClose={() => setIsChatOpen(false)} />}

      <BottomNav />
    </div>
  );
};

export default HerculesQuizScreen;
