import { useState } from "react";
import styles from "./nav.module.css";

export default function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#home" aria-label="Ibimina Hart, home">
        <span className={styles.monogram}>IH</span>
        <span>Ibimina Hart</span>
      </a>
      <nav id="main-navigation" className={`${styles.navigation} ${show ? styles.open : ""}`} aria-label="Main navigation">
        <a href="#about" onClick={() => setShow(false)}>About</a>
        <a href="#skills" onClick={() => setShow(false)}>Expertise</a>
        <a href="#work" onClick={() => setShow(false)}>Selected work</a>
        <a className={styles.contactLink} href="#contact" onClick={() => setShow(false)}>
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <button
        className={styles.menuButton}
        onClick={() => setShow(!show)}
        aria-expanded={show}
        aria-controls="main-navigation"
        aria-label={show ? "Close navigation" : "Open navigation"}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
