import styles from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
}

export default function VoteStats({ votes }: VoteStatsProps) {
  const total = votes.good + votes.neutral + votes.bad;
  const positivePercentage =
    total > 0 ? Math.round((votes.good / total) * 100) : 0;

  return (
    <div className={styles.container}>
      <div className={styles.stat}>
        <span>Good:</span>
        <strong>{votes.good}</strong>
      </div>
      <div className={styles.stat}>
        <span>Neutral:</span>
        <strong>{votes.neutral}</strong>
      </div>
      <div className={styles.stat}>
        <span>Bad:</span>
        <strong>{votes.bad}</strong>
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
