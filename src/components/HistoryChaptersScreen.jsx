import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import ScreenHeader from "../components/ScreenHeader";
import Card from "../components/Card";
import BottomNav from "../components/BottomNav";
import styles from "./HistoryChaptersScreen.module.css";

const chapters = [
  { number: 1, title: "The Creation of the World", color: "blue", group: "Mythology" },
  { number: 2, title: "Hercules", color: "yellow", group: "Mythology" },
  { number: 3, title: "Theseus", color: "orange", group: "Mythology" },
  { number: 4, title: "The Argonaut Expedition", color: "mint", group: "Mythology" },
  { number: 5, title: "The Trojan War", color: "pink", group: "Mythology" },
  { number: 6, title: "The Adventures of Odysseus", color: "cyan", group: "Mythology" },
  { number: 7, title: "The Stone Age", color: "green", group: "Prehistory" },
  { number: 8, title: "Cycladic Civilization", color: "orange", group: "Prehistory" },
  { number: 9, title: "Minoan Civilization", color: "blue", group: "Prehistory" },
  { number: 10, title: "Mycenaean Civilization", color: "purple", group: "Prehistory" }
];

const HistoryChaptersScreen = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (number) => {
    console.log("Selected chapter:", number);
    // You can route here later if needed
  };

  const grouped = chapters.reduce((acc, ch) => {
    acc[ch.group] = acc[ch.group] || [];
    acc[ch.group].push(ch);
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <ScreenHeader title="Chapters" />
      <Card>
        <p className={styles.intro}>Introduction</p>
        {Object.entries(grouped).map(([group, items]) => (
          <div key={group}>
            <h3 className={styles.sectionTitle}>{group}</h3>
            {items.map(({ number, title, color }) => (
              <div
                key={number}
                className={styles.chapterRow}
                onClick={() => handleClick(number)}
              >
                <div className={`${styles.circle} ${styles[color]}`}>{number}</div>
                <span className={styles.chapterTitle}>{title}</span>
              </div>
            ))}
          </div>
        ))}
      </Card>
      <BottomNav />
    </div>
  );
};

export default HistoryChaptersScreen;