import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <section id={styles.home}>
        <figure>
          <Image
           width={150}
           height={150}
            src="/ibimina.png"
            alt="ibimina hart avatar"
            className={styles.avatar}
          />
        </figure>

        <article>
          <p className={styles.name}>Hello! I'm Ibimina. </p>
          <div className={styles.social}>
            <a
              href="/images/Ibimina_HART_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resume}
            >
              Resume
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
