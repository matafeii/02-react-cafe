import styles from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
}

export default function VoteOptions({ onVote, onReset }: VoteOptionsProps) {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => onVote("good")}
        type="button"
      >
        Good
      </button>
      <button
        className={styles.button}
        onClick={() => onVote("neutral")}
        type="button"
      >
        Neutral
      </button>
      <button
        className={styles.button}
        onClick={() => onVote("bad")}
        type="button"
      >
        Bad
      </button>
      <button className={styles.reset} onClick={onReset} type="button">
        Reset
      </button>
    </div>
  );
}
