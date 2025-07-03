import styles from "./StepIndicator.module.css";

const StepIndicator = ({ current, total = 3 }) => {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`${styles.dot} ${i === current ? styles.active : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default StepIndicator;