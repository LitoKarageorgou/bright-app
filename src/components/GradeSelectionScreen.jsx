import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./GradeSelectionScreen.module.css";
import ScreenHeader from "../components/ScreenHeader";
import Card from "./Card";
import Modal from "../components/Modal";
import BottomNav from "./BottomNav";

const GradeSelectionScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleUnavailableGrade = () => {
    setIsModalOpen(true);
  };

  const handleGoToGrade3 = () => {
    setIsModalOpen(false);
    navigate("/courses");
  };

  return (
    <div className={styles.container}>
      <ScreenHeader title="Grade" />
      <Card>
        <h3 className={styles.sectionTitle}>Elementary School</h3>
        <div className={styles.buttonRow}>
          <button
            className={`${styles.gradeButton} ${styles.green}`}
            onClick={handleUnavailableGrade}
          >
            Grade 1
          </button>
          <button
            className={`${styles.gradeButton} ${styles.yellow}`}
            onClick={handleUnavailableGrade}
          >
            Grade 2
          </button>
        </div>
        <div className={styles.buttonRow}>
          <button
            className={`${styles.gradeButton} ${styles.blue}`}
            onClick={() => navigate("/courses")}
          >
            Grade 3
          </button>
          <button
            className={`${styles.gradeButton} ${styles.purple}`}
            onClick={handleUnavailableGrade}
          >
            Grade 4
          </button>
        </div>
        <div className={styles.buttonRow}>
          <button
            className={`${styles.gradeButton} ${styles.pink}`}
            onClick={handleUnavailableGrade}
          >
            Grade 5
          </button>
          <button
            className={`${styles.gradeButton} ${styles.mint}`}
            onClick={handleUnavailableGrade}
          >
            Grade 6
          </button>
        </div>

        <h3 className={styles.sectionTitle}>Middle School</h3>
        <div className={styles.buttonRow}>
          <button
            className={`${styles.gradeButton} ${styles.orange}`}
            onClick={handleUnavailableGrade}
          >
            Grade 1
          </button>
          <button
            className={`${styles.gradeButton} ${styles.cyan}`}
            onClick={handleUnavailableGrade}
          >
            Grade 2
          </button>
        </div>
        <div className={styles.buttonRow}>
          <button
            className={`${styles.gradeButton} ${styles.purple}`}
            onClick={handleUnavailableGrade}
          >
            Grade 3
          </button>
        </div>

        <h3 className={styles.sectionTitle}>High School</h3>
        <div className={styles.buttonRow}>
          <button
            className={`${styles.gradeButton} ${styles.pink}`}
            onClick={handleUnavailableGrade}
          >
            Grade 1
          </button>
          <button
            className={`${styles.gradeButton} ${styles.green}`}
            onClick={handleUnavailableGrade}
          >
            Grade 2
          </button>
        </div>
        <div className={styles.buttonRow}>
          <button
            className={`${styles.gradeButton} ${styles.yellow}`}
            onClick={handleUnavailableGrade}
          >
            Grade 3
          </button>
        </div>
      </Card>

      {/* Modal shown on unsupported grade click */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Demo Access Only"
        message="This is a prototype. Only Grade 3 (Elementary School) is available."
        actionLabel="Go to Grade 3"
        onAction={handleGoToGrade3}
      />
      <BottomNav />
    </div>
  );
};

export default GradeSelectionScreen;
