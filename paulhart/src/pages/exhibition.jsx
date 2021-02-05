import styles from "./exhibition.module.css";
import ListExhib from "../components/ListExhib";

export default function Exhibition() {
  return (
    <div className={styles.exhib}>
      <ListExhib />
    </div>
  );
}
