import React from "react";
import { useFetch } from "../hook/useFetch";

export default function Works() {
  const { data, isLoading, error } = useFetch();

  return (
    <div id="work">
      <h3 className="uppercase abt">Projects</h3>
      {error && <>error...</>}
      {isLoading && <>Loading</>}
      {data &&
        data.projects.map((project) => (
          <article key={project.id}>
            <figure className="project">
              <img src={project.image} alt={`${project.name} screenshot`} />
            </figure>
            <div className="project-details">
              <h4>{project.name}</h4>
              <p className="tech-con">
                Technologies used :
                {project.technologies.map((element) => (
                  <span key={element} className="tech">
                    {element}
                  </span>
                ))}
              </p>
              <p>{project.description}</p>
              <div>
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
    </div>
  );
}
