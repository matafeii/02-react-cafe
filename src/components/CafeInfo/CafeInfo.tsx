import styles from "./CafeInfo.module.css";

export default function CafeInfo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>☕ Café Feedback</h1>
      <p className={styles.description}>
        Please rate your experience at our café. Your feedback helps us improve!
      </p>
    </div>
  );
}
