import styles from "./Modal.module.css";

const Modal = ({
  isOpen,
  onClose,
  title,
  message,
  actionLabel,
  onAction,
  primaryButtonClass,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttons}>
          <button onClick={onClose} className={styles.button}>Close</button>
          {onAction && (
            <button
              onClick={onAction}
              className={`${styles.primaryButton} ${primaryButtonClass || ""}`}
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;