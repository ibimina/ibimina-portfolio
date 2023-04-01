import styles from '../styles/about.module.css'
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <p className={styles.margin}>"Hi there! I'm a student at 
        <span>
          {" "}
          <a
            href="https://www.altschoolafrica.com/"
            rel="noreferrer"
            target="_blank"
            className="social-link"
          >
            Altschool Africa    {" "} {" "}
          </a>
          {" "}
        </span>
        <span>currently learning web development.</span> 
      </p> 
      <p className={styles.margin}>I enjoy creating visually stunning and engaging web experiences. My passion for making things and the challenge of bringing a design concept to life motivate me.</p>
      <p>I'm most likely to be found playing card games or watching movies when I'm not coding. So please contact me if you have any movie recommendations!</p>
         </section>
  );
}
