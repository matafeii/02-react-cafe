import styles from "./VoteStats.module.css";
import type { Feedback } from "../../types/votes";

interface VoteStatsProps {
  stats: Feedback;
  total: number;
  positivePercentage: number;
}

export default function VoteStats({
  stats,
  total,
  positivePercentage,
}: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.stat}>
        <span>Good:</span>
        <strong>{stats.good}</strong>
      </div>
      <div className={styles.stat}>
        <span>Neutral:</span>
        <strong>{stats.neutral}</strong>
      </div>
      <div className={styles.stat}>
        <span>Bad:</span>
        <strong>{stats.bad}</strong>
      </div>
      <div className={styles.stat}>
        <span>Total:</span>
        <strong>{total}</strong>
      </div>
      <div className={styles.stat}>
        <span>Positive:</span>
        <strong>{positivePercentage}%</strong>
      </div>
    </div>
  );
}
