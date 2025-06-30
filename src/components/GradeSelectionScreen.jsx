import styles from './GradeSelectionScreen.module.css';

const GradeSelectionScreen = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Elementary School</h2>
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

      <h2 className={styles.sectionTitle}>Middle School</h2>
      <div className={styles.buttonRow}>
        <button className={`${styles.gradeButton} ${styles.orange}`}>Grade 7</button>
        <button className={`${styles.gradeButton} ${styles.cyan}`}>Grade 8</button>
      </div>
      <div className={styles.buttonRow}>
        <button className={`${styles.gradeButton} ${styles.purple}`}>Grade 9</button>
      </div>

      <h2 className={styles.sectionTitle}>High School</h2>
      <div className={styles.buttonRow}>
        <button className={`${styles.gradeButton} ${styles.pink}`}>Grade 10</button>
        <button className={`${styles.gradeButton} ${styles.green}`}>Grade 11</button>
      </div>
      <div className={styles.buttonRow}>
        <button className={`${styles.gradeButton} ${styles.yellow}`}>Grade 12</button>
      </div>
    </div>
  );
};

export default GradeSelectionScreen;
