import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdEco,
  MdFlag,
  MdLanguage,
  MdBrush,
  MdMenuBook,
  MdCalculate,
  MdMusicNote,
  MdLibraryBooks,
  MdFavorite,
} from "react-icons/md";
import ScreenHeader from "../components/ScreenHeader";
import Modal from "../components/Modal";
import BottomNav from "../components/BottomNav";
import styles from "./CourseSelectionScreen.module.css";

const CourseSelectionScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUnavailableCourse = () => {
    setIsModalOpen(true);
  };

  const handleGoToHistory = () => {
    setIsModalOpen(false);
    navigate("/courses/history");
  };

  return (
    <div className={styles.container}>
      <ScreenHeader title="Courses" />
      <p className={styles.subtitle}>Grade 3 – Elementary School</p>
        <div className={styles.grid}>
          <button className={styles.courseButton} onClick={handleGoToHistory}>
            <div className={`${styles.iconCircle} ${styles.yellow}`}>
              <MdMenuBook className={styles.icon} />
            </div>
            <span>History</span>
          </button>

          <button className={styles.courseButton} onClick={handleUnavailableCourse}>
            <div className={`${styles.iconCircle} ${styles.cyan}`}>
              <MdFlag className={styles.icon} />
            </div>
            <span>Greek</span>
          </button>

          <button className={styles.courseButton} onClick={handleUnavailableCourse}>
            <div className={`${styles.iconCircle} ${styles.mint}`}>
              <MdLibraryBooks className={styles.icon} />
            </div>
            <span>Literature</span>
          </button>

          <button className={styles.courseButton} onClick={handleUnavailableCourse}>
            <div className={`${styles.iconCircle} ${styles.orange}`}>
              <MdCalculate className={styles.icon} />
            </div>
            <span>Math</span>
          </button>

          <button className={styles.courseButton} onClick={handleUnavailableCourse}>
            <div className={`${styles.iconCircle} ${styles.purple}`}>
              <MdBrush className={styles.icon} />
            </div>
            <span>Art</span>
          </button>

          <button className={styles.courseButton} onClick={handleUnavailableCourse}>
            <div className={`${styles.iconCircle} ${styles.pink}`}>
              <MdFavorite className={styles.icon} />
            </div>
            <span>Physical Ed</span>
          </button>

          <button className={styles.courseButton} onClick={handleUnavailableCourse}>
            <div className={`${styles.iconCircle} ${styles.blue}`}>
              <MdLanguage className={styles.icon} />
            </div>
            <span>English</span>
          </button>

          <button className={styles.courseButton} onClick={handleUnavailableCourse}>
            <div className={`${styles.iconCircle} ${styles.green}`}>
              <MdEco className={styles.icon} />
            </div>
            <span>Environmental</span>
          </button>

          <button className={styles.courseButton} onClick={handleUnavailableCourse}>
            <div className={`${styles.iconCircle} ${styles.orchid}`}>
              <MdMusicNote className={styles.icon} />
            </div>
            <span>Music</span>
          </button>
        </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Demo Access Only"
        message="This is a prototype. Only the History course is available."
        actionLabel="Go to History"
        onAction={handleGoToHistory}
      />
      <BottomNav />
    </div>
  );
};

export default CourseSelectionScreen;