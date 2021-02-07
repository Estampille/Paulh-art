import styles from "./Experiences.module.css";
import Experience from "../components/Experience";

export default function Cv() {
  return (
    <div className={styles.Cv}>
      <Experience />
    </div>
  );
}
