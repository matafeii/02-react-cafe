import styles from "./VoteOptions.module.css";
import type { FeedbackOption } from "../../types/votes";

interface VoteOptionsProps {
  onFeedback: (option: FeedbackOption) => void;
  onReset: () => void;
}

export default function VoteOptions({
  onFeedback,
  onReset,
}: VoteOptionsProps) {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => onFeedback("good")}
        type="button"
      >
        Good
      </button>
      <button
        className={styles.button}
        onClick={() => onFeedback("neutral")}
        type="button"
      >
        Neutral
      </button>
      <button
        className={styles.button}
        onClick={() => onFeedback("bad")}
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
