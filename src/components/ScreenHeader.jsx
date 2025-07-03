import styles from "./ScreenHeader.module.css";

function ScreenHeader({ title, align = "center", size = "large" }) {
  const alignmentClass = align === "left" ? styles.leftAlign : styles.centerAlign;
  const sizeClass = size === "small" ? styles.smallText : styles.largeText;

  return (
    <div className={`${styles.pageHeader} ${alignmentClass}`}>
      <h2 className={sizeClass}>{title}</h2>
    </div>
  );
}

export default ScreenHeader;