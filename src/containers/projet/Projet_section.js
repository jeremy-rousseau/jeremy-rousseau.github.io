import React, { useState, useContext } from "react";
import ProjectCard from "../../components/projet/Projet_tuile";
import ProjectModal from "../../components/projet/Projet_modal";
import { projet } from "../../projet";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./Projet_section.scss";

export default function ProjectsSection() {
  const { isDark } = useContext(StyleContext);
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const allCategories = ["Tout", ...new Set(projet.projectsList.flatMap(p => p.categories))];

  const filteredProjects = projet.projectsList.filter(project =>
    activeCategory === "Tout" || project.categories.includes(activeCategory)
  );

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  if (!projet.display) {
    return null;
  }
  return (
    <article className="projet-section" id="projet">
      <Fade left duration={1000}>
        <header>
          <h1 className="projet-heading">Mes Projets</h1>
        </header>
        <section>
          <ul className="filter-list">
            {allCategories.map((category) => (
              <li key={category} className="filter-item">
                <button
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>

          <ul className="project-list">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} onClick={openModal} isDark={isDark} />
            ))}
          </ul>
        </section>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
          isDark={isDark}
        />
      </Fade>
    </article>

  );
}