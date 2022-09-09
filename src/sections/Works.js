import React from "react";

import data from "../data.json"
export default function Works() {


  return (
    <div id="work" className="margin">
      <h3 className="uppercase abt">Projects</h3>

      {data &&
        data.projects.map((project) => (
          <article key={project.id}>
            <figure className="project">
              <img src={project.image} alt={`${project.name} screenshot`} />
            </figure>
            <div className="project-details">
              <h4>{project.name}</h4>
              <div className="tech-con ga">
                <p>Technologies used:</p>
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

              <p className="desc">{project.description}</p>
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
    </div>
  );
}
