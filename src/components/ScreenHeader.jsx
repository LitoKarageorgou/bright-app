import styles from "./ScreenHeader.module.css";

function ScreenHeader({ title }) {
  return (
    <div className={styles.pageHeader}>
      <h2>{title}</h2>
    </div>
  );
}

export default ScreenHeader;