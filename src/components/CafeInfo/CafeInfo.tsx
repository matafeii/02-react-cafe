import styles from "./CafeInfo.module.css";

export default function CafeInfo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>☕ React Café</h1>
      <p className={styles.description}>
        Welcome to our React Café – a place where you can vote for your favorite
        coffee drink! Let us know what you prefer by voting below.
      </p>
    </div>
  );
}
