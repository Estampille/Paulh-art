import Navbar from "./navbar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.head}>
      <h1>Paulh'art</h1>
      <Navbar />
    </div>
  );
}
