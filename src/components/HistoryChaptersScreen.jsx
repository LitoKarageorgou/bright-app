import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScreenHeader from "../components/ScreenHeader";
import BottomNav from "../components/BottomNav";
import Modal from "../components/Modal";
import styles from "./HistoryChaptersScreen.module.css";
import sheep from "../assets/sheep-right.png";

const chapters = [
  {
    number: 1,
    title: "The Creation of the World",
    color: "blue",
    group: "Mythology",
  },
  { number: 2, title: "Hercules", color: "orange", group: "Mythology" },
  { number: 3, title: "Theseus", color: "yellow", group: "Mythology" },
  {
    number: 4,
    title: "The Argonaut Expedition",
    color: "mint",
    group: "Mythology",
  },
  { number: 5, title: "The Trojan War", color: "pink", group: "Mythology" },
  {
    number: 6,
    title: "The Adventures of Odysseus",
    color: "cyan",
    group: "Mythology",
  },
  { number: 7, title: "The Stone Age", color: "green", group: "Prehistory" },
  {
    number: 8,
    title: "Cycladic Civilization",
    color: "orange",
    group: "Prehistory",
  },
  {
    number: 9,
    title: "Minoan Civilization",
    color: "blue",
    group: "Prehistory",
  },
  {
    number: 10,
    title: "Mycenaean Civilization",
    color: "purple",
    group: "Prehistory",
  },
];

const HistoryChaptersScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (number) => {
    if (number === 2) {
      setExpandedChapter(expandedChapter === 2 ? null : 2);
    } else {
      setIsModalOpen(true);
    }
  };

  const grouped = chapters.reduce((acc, ch) => {
    acc[ch.group] = acc[ch.group] || [];
    acc[ch.group].push(ch);
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <ScreenHeader title="Chapters" />
      <p className={styles.subtitle}>History • Grade 3 • Elementary</p>

      <div
        className={`${styles.courseButton} ${styles.center}`}
        onClick={() => handleClick(998)}
      >
        <span>Introduction</span>
      </div>

      {Object.entries(grouped).map(([group, items]) => (
        <div key={group}>
          <h3 className={styles.sectionTitle}>{group}</h3>
          {items.map(({ number, title, color }) => {
            const isExpanded = number === expandedChapter;
            return (
              <div
                key={number}
                id={`chapter-${number}`}
                className={`${styles.courseButton} ${
                  isExpanded ? styles.expanded : ""
                }`}
                onClick={() => handleClick(number)}
              >
                <div className={styles.chapterRow}>
                  <div className={`${styles.chapterNumber} ${styles[color]}`}>
                    {number}
                  </div>
                  <span className={styles.chapterTitle}>{title}</span>
                </div>

                {isExpanded && (
                  <div className={styles.expandedContent}>
                    <img src={sheep} alt="Mascot" className={styles.mascot} />
                    <button
                      className={styles.startButton}
                      onClick={() =>
                        navigate("/courses/history/hercules/video")
                      }
                    >
                      Start for 120 XP
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}

      <div
        className={`${styles.courseButton} ${styles.center}`}
        onClick={() => handleClick(999)}
      >
        <span>Glossary</span>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Demo Access Only"
        message="This is a prototype. Only the Hercules chapter is available."
        actionLabel="Go to Hercules"
        onAction={() => {
          setIsModalOpen(false);
          setExpandedChapter(2);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        primaryButtonClass={styles.orange}
      />

      <BottomNav />
    </div>
  );
};

export default HistoryChaptersScreen;
