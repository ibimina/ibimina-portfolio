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
  image?: string;
  technologies?: Technology[];
  description: string;
  url?: string;
  appStoreUrl?: string;
  repo?: string;
  organization?: string;
  period?: string;
  status?: string;
}

export default function Works() {
  const projects = data.projects as Project[];
  const teamProjects = projects.filter((project) => project.organization);
  const independentProjects = projects.filter((project) => !project.organization);
  const experiences = teamProjects.reduce<Record<string, Project[]>>((grouped, project) => {
    const organization = project.organization!;
    grouped[organization] ??= [];
    grouped[organization].push(project);
    return grouped;
  }, {});

  return (
    <section id='work' className={styles.work}>
      <p className={styles.eyebrow}>Career / experience</p>
      <h2 className={styles.uppercase}>Products built in teams<span>.</span></h2>

      <div className={styles.experiences}>
        {Object.entries(experiences).map(([organization, contributions], index) => (
          <details className={styles.experience} key={organization} open={index === 0}>
            <summary className={styles.experienceSummary}>
              <span className={styles.experienceTitle}>
                <strong>{organization}</strong>
                <span>Software Engineer</span>
              </span>
              <span className={styles.toggle} aria-hidden="true" />
            </summary>
            <div className={styles.contributions}>
              {contributions.map((project) => (
                <article className={styles.contribution} key={project.id}>
                  <div className={styles.contributionCopy}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className={styles.contributionMeta}>
                    {project.status && <span className={styles.status}>{project.status}</span>}
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noreferrer">
                        Visit site <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a href={project.appStoreUrl} target="_blank" rel="noreferrer">
                        App Store <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </details>
        ))}
      </div>

      <div className={styles.independentHeading}>
        <p className={styles.eyebrow}>Outside of work</p>
        <h3>Independent projects<span>.</span></h3>
      </div>
      <div className={styles.independentProjects}>
        {independentProjects.map((project) => (
          <article key={project.id}>
            {project.image && (
              <figure className={styles.project}>
                <Image width={600} height={350} src={project.image} alt={`${project.name} screenshot`} />
              </figure>
            )}
            <div className={styles.projectDetails}>
              <h4 className={styles.name}>{project.name}</h4>
              <div className={styles.tech_con}>
                {project.technologies?.map((element) => (
                  <Image width={30} height={30} src={element.image} alt={element.alt} key={element.id} />
                ))}
              </div>
              <p className={styles.desc}>{project.description}</p>
              <div className={styles.link}>
                {project.url && <a href={project.url} target="_blank" rel="noreferrer">Visit project <span aria-hidden="true">↗</span></a>}
                {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Source <span aria-hidden="true">↗</span></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
