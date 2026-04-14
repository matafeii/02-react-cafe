import styles from "./Notification.module.css";

export default function Notification() {
  return (
    <p className={styles.message}>
      Thank you for voting! Your choice helps us improve the café experience.
    </p>
  );
}
