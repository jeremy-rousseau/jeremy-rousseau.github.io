import React from "react";
import "./Projet_tuile.scss";

export default function ProjectCard({ project, onClick, style, isDark }) {
  const handleOnClick = (event) => {
    event.preventDefault();
    onClick(project);
  };

  return (
    <li className="project-item" style={style}>
      <a href="#" onClick={handleOnClick} >
        <figure>
          <div className="project-item-icon-box">
            <i className="fas fa-eye"></i>
          </div>
          {project.images && project.images.length > 0 ? (
              <img
                src={project.images[0].src}
                alt={project.title}
                loading="lazy"
              />
            ) : (
              <img
                src="https://i.postimg.cc/7LFMpqJr/Image-non-disponible.png"
                alt="Illustration non disponible"
                loading="lazy"
              />
          )}
        </figure>
        <h3 className={isDark ? "project-title dark-mode-text" : "project-title"}>{project.title}</h3>
        <p className={isDark ? "project-category dark-mode-text" : "project-category"}>{project.categories.join(", ")}</p>
      </a>
    </li>
  );
}