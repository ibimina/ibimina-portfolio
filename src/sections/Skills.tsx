import styles from "../styles/skills.module.css";
import data from "../data.json";
import Image from "next/image";
export default function Skills() {
  return (
    <section id={styles.skill} className={styles.margin}>
      <h2 className={styles.uppercase}>skills</h2>
      <div className={styles.skill_set}>
        {data &&
          data.skills.map((skill) => (
            <figure key={skill.name}>
              <Image width={30} height={30} src={skill.image} alt={skill.alt} />
              <figcaption>{skill.name}</figcaption>
            </figure>
          ))}
      </div>
    </section>
  );
}
