import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles}>
        <a
          href="/contact"
          className={styles.thanksLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
