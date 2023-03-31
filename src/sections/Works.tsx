import data from "../data.json"
import styles from "../styles/work.module.css"
import Image from "next/image"
export default function Works() {
  return (
    <section id={styles.work}>
      <h2 className={styles.uppercase}>Projects</h2>

      {data &&
        data.projects.map((project) => (
          <article key={project.id}>
            <figure className={styles.project}>
              <Image width={600} height={300} src={project.image} alt={`${project.name} screenshot`} />
            </figure>
            <div className="project-details">
              <h4 className={styles.name}>{project.name}</h4>
              <div className={styles.techstack}>
                <div className={styles.tech_con}>
                  {project.technologies.map((element) => (
                    <Image
                      width={50}
                      height={50}
                      src={element.image}
                      alt={element.alt}
                      key={element.id}
                    />
                  ))}
                </div>
              </div>

              <p className={styles.desc}>
                {project.description}{" "}
                <a
                  href={`https://${project.api}`}
                  target="blank"
                  rel="noreferrer"
                >
                  {project.api}
                </a>
                <span> {project.api ? "API." : ""}</span>
              </p>
              <div className={styles.link}>
                <a href={project.url} target="blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.repo} target="blank" rel="noreferrer">
                  Repo
                </a>
              </div>
            </div>
          </article>
        ))}
    </section>
  );
}
