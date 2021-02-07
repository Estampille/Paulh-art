import styles from "./navbar.module.css";

const links = [
  {
    title: "Accueil",
    description: "Bienvenu sur mon site",
    url: "/",
  },
  {
    title: "Expériences",
    description: "Mon parcours et mes expériences",
    url: "/Expériences",
  },
  {
    title: "Expositions",
    description: "Mes expositions",
    url: "/expo",
  },
  {
    title: "Boutique",
    description: "Mes expositions",
    url: "/Artisannat",
  },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul id="navbar-list" className={styles.navlist}>
        {links.map((link) => (
          <li
            key={link.title}
            description={link.description}
            className={styles.link}
          >
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
