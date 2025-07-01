import styles from './GradeSelectionScreen.module.css';
import ScreenHeader from "../components/ScreenHeader";

const GradeSelectionScreen = () => {
  return (
    <div className={styles.container}>
      <ScreenHeader title="Grade" />
      <h3 className={styles.sectionTitle}>Elementary School</h3>
      <div className={styles.buttonRow}>
        <button className={`${styles.gradeButton} ${styles.green}`}>Grade 1</button>
        <button className={`${styles.gradeButton} ${styles.yellow}`}>Grade 2</button>
      </div>
      <div className={styles.buttonRow}>
        <button className={`${styles.gradeButton} ${styles.blue}`}>Grade 3</button>
        <button className={`${styles.gradeButton} ${styles.purple}`}>Grade 4</button>
      </div>
      <div className={styles.buttonRow}>
        <button className={`${styles.gradeButton} ${styles.pink}`}>Grade 5</button>
        <button className={`${styles.gradeButton} ${styles.mint}`}>Grade 6</button>
      </div>

      <h3 className={styles.sectionTitle}>Middle School</h3>
      <div className={styles.buttonRow}>
        <button className={`${styles.gradeButton} ${styles.orange}`}>Grade 1</button>
        <button className={`${styles.gradeButton} ${styles.cyan}`}>Grade 2</button>
      </div>
      <div className={styles.buttonRow}>
        <button className={`${styles.gradeButton} ${styles.purple}`}>Grade 3</button>
      </div>

      <h3 className={styles.sectionTitle}>High School</h3>
      <div className={styles.buttonRow}>
        <button className={`${styles.gradeButton} ${styles.pink}`}>Grade 1</button>
        <button className={`${styles.gradeButton} ${styles.green}`}>Grade 2</button>
      </div>
      <div className={styles.buttonRow}>
        <button className={`${styles.gradeButton} ${styles.yellow}`}>Grade 3</button>
      </div>
    </div>
  );
};

export default GradeSelectionScreen;
