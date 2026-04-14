import styles from "./VoteStats.module.css";

export function VoteStats() {
  return (
    <div className={styles.container}>
      <div className={styles.stat}>
        <span>Espresso:</span>
        <strong>24 votes</strong>
      </div>
      <div className={styles.stat}>
        <span>Cappuccino:</span>
        <strong>18 votes</strong>
      </div>
      <div className={styles.stat}>
        <span>Latte:</span>
        <strong>32 votes</strong>
      </div>
    </div>
  );
}
