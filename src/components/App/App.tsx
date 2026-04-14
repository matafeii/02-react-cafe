import styles from "./App.module.css";
import { CafeInfo } from "../CafeInfo/CafeInfo";
import { Notification } from "../Notification/Notification";
import { VoteOptions } from "../VoteOptions/VoteOptions";
import { VoteStats } from "../VoteStats/VoteStats";

export function App() {
  return (
    <div className={styles.app}>
      <CafeInfo />
      <Notification />
      <VoteOptions />
      <VoteStats />
    </div>
  );
}
