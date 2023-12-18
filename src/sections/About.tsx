import styles from '../styles/about.module.css'
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <p className={styles.margin}>Hi there!
       I'm a frontend engineer with experience in web development. I'm passionate about creating visually amazing web experiences and bringing creative concepts to life with code.
      </p>
      <p>I'm most likely to be found playing card games or watching movies when I'm not coding. So please contact me if you have any movie recommendations!</p>
    </section>
  );
}
