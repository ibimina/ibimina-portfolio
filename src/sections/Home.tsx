import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Software engineer <span>·</span> Product-minded builder</p>
        <h1>Ibimina<br />Hart<span className={styles.period}>.</span></h1>
        <p className={styles.intro}>
          I build thoughtful digital products that make complex work feel simple.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#work">
            Explore my work <FaArrowRight aria-hidden="true" />
          </a>
          <a className={styles.resume} href="/Ibimina_Hart_CV.pdf" target="_blank" rel="noopener noreferrer">
            View résumé <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className={styles.availability}><span /> Open to thoughtful collaborations</p>
      </div>
      <figure className={styles.portraitStage}>
        <Image
          width={810}
          height={1080}
          src="/ib.jpeg"
          alt="Ibimina Hart"
          className={styles.avatar}
          priority
        />
        <figcaption className={styles.portraitCaption}>Building with care, shipping with purpose.</figcaption>
      </figure>
    </section>
  );
}
