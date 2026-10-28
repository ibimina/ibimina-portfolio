import styles from '../styles/about.module.css'
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <p className={styles.eyebrow}>About</p>
      <h2 className={styles.heading}>Practical software, built around people.</h2>
      <p className={styles.lead}>
        I&apos;m a software engineer building web and mobile products across health, civic technology, and business. I turn complex workflows into clear, dependable experiences for the people who use them.
      </p>
      <p className={styles.detail}>
        My work spans React, Next.js, and React Native, with a focus on accessible interfaces, useful integrations, and reliable releases. I also use AI to research problems, explore possible solutions, and speed up iteration, then validate the results against user needs and tests.
      </p>
    </section>
  );
}
