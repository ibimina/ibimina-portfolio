import React from "react";

import data from "../data.json"
export default function Works() {


  return (
    <section id="work" className="margin">
      <h2 className="uppercase abt">Projects</h2>

      {data &&
        data.projects.map((project) => (
          <article key={project.id}>
            <figure className="project">
              <img src={project.image} alt={`${project.name} screenshot`} />
            </figure>
            <div className="project-details">
              <h4 className="name">{project.name}</h4>
              <div className="tech-con ga">
                <div className="tech-con">
                  {project.technologies.map((element) => (
                    <img
                      src={element.image}
                      alt={element.alt}
                      key={element.id}
                    />
                  ))}
                </div>
              </div>

              <p className="desc">
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
              <div className="link">
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
