import { useState } from "react";
import styles from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import type { VoteType, Votes } from "../../types/votes";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const total = votes.good + votes.neutral + votes.bad;

  return (
    <div className={styles.app}>
      <CafeInfo />
      {total > 0 && <Notification />}
      <VoteOptions onVote={handleVote} onReset={resetVotes} />
      {total > 0 && <VoteStats votes={votes} />}
    </div>
  );
}
