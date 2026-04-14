import { useState } from "react";
import styles from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import type { FeedbackOption, Feedback } from "../../types/votes";

export default function App() {
  const [feedback, setFeedback] = useState<Feedback>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (option: FeedbackOption) => {
    setFeedback((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    total > 0 ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <div className={styles.app}>
      <CafeInfo />
      {total > 0 && <Notification />}
      <VoteOptions onFeedback={handleFeedback} onReset={handleReset} />
      {total > 0 && (
        <VoteStats
          stats={feedback}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
}
