import { MdSmartToy } from "react-icons/md";
import styles from "./AiButton.module.css";

const AiButton = ({ onClick }) => {
  return (
    <button className={styles.aiButton} onClick={onClick}>
      <MdSmartToy className={styles.aiIcon} />
    </button>
  );
};

export default AiButton;