import { MdSchool, MdSearch, MdEmojiEvents, MdPerson } from "react-icons/md";
import styles from "./BottomNav.module.css";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <button onClick={() => navigate("/learn")} className={styles.iconButton}>
        <MdSchool className={styles.icon} />
      </button>
      <button onClick={() => navigate("/search")} className={styles.iconButton}>
        <MdSearch className={styles.icon} />
      </button>
      <button
        onClick={() => navigate("/leaderboard")}
        className={styles.iconButton}
      >
        <MdEmojiEvents className={styles.icon} />
      </button>
      <button
        onClick={() => navigate("/profile")}
        className={styles.iconButton}
      >
        <MdPerson className={styles.icon} />
      </button>
    </nav>
  );
};

export default BottomNav;
