import data from "../data.json"
import styles from "../styles/work.module.css"
import Image from "next/image"

interface Technology {
  image: string;
  alt: string;
  id: string;
}

interface Project {
  id: string;
  name: string;
  image: string;
  technologies: Technology[];
  description: string;
  url: string;
  repo: string;
}

export default function Works() {
  const projects = data.projects as Project[];
  return (
    <section id='work' className={styles.work}>
      <h2 className={styles.uppercase}>Projects</h2>

      {projects.map((project) => (
        <article key={project.id}>
          <figure className={styles.project}>
            <Image width={600} height={350} src={project.image} alt={`${project.name} screenshot`} />
          </figure>
          <div className="project-details">
            <h4 className={styles.name}>{project.name}</h4>
            <div className={styles.techstack}>
              <div className={styles.tech_con}>
                {project.technologies.map((element) => (
                  <Image
                    width={30}
                    height={30}
                    src={element.image}
                    alt={element.alt}
                    key={element.id}
                  />
                ))}
              </div>
            </div>

            <p className={styles.desc}>
              {project.description}{" "}
              {/* <a
                  href={`https://${project?.api}`}
                  target="blank"
                  rel="noreferrer"
                >
                  {project?.api}
                </a>
                <span> {project?.api ? "API." : ""}</span> */}
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
