import styles from "./VoteOptions.module.css";

export default function VoteOptions() {
  const handleVote = (option: string) => {
    console.log(`Voted: ${option}`);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => handleVote("Espresso")}>
        ☕ Espresso
      </button>
      <button
        className={styles.button}
        onClick={() => handleVote("Cappuccino")}
      >
        🍶 Cappuccino
      </button>
      <button className={styles.button} onClick={() => handleVote("Latte")}>
        🥛 Latte
      </button>
      <button
        className={styles.reset}
        onClick={() => console.log("Reset votes")}
      >
        Reset
      </button>
    </div>
  );
}
