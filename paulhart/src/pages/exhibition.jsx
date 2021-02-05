import styles from "./exhibition.module.css";

export default function Exhibition() {
  return (
    <article className={styles.card}>
      <figure className={styles.figure}>
        <img
          className={styles.image}
          alt=""
          src="https://onedrive.live.com/embed?cid=A6A94DDB09E0C333&resid=A6A94DDB09E0C333%21209013&authkey=ABsAWD5XG1OVpvQ"
        />
        <figcaption className={styles.figcaption}>
          <h2 className={styles.n}>Nom</h2>
          <span className={styles.price}>prix</span>
        </figcaption>
      </figure>
    </article>
  );
}
