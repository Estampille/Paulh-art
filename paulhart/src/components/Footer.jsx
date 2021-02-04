import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <a
          href="https://www.wildcodeschool.com/fr-FR"
          className={styles.thanksLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Wild Code School
        </a>
      </div>
    </footer>
  );
}
