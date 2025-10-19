import React, { useState } from "react";
import Modal from 'react-modal';
import emoji from "react-easy-emoji";
import "./Projet_modal.scss";

export default function ProjectModal({ project, isOpen, onClose, isDark }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const hasImages = project.images && project.images.length > 0;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const getMediaIcon = (type) => {
    switch (type) {
      case "video": return "fas fa-video";
      case "article": return "fas fa-newspaper";
      case "github": return "fab fa-github";
      case "demo": return "fas fa-globe";
      default: return "fas fa-link";
    }
  };

  const modalClassName = isDark ? "ReactModal__Content dark-mode" : "ReactModal__Content";

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={modalClassName}>
      <button onClick={onClose} className="bouton_croix">
        &times;
      </button>
      <div className="modal-content">

        {hasImages && (
          <div className="image-carousel">
            <div>
              {project.images[currentImageIndex].src.length > 1 && (
                <img
                  src={project.images[currentImageIndex].src}
                  alt={project.images[currentImageIndex].legend}
                  loading="lazy"
                />
              )}
              <p className="image-legend">{project.images[currentImageIndex].legend}</p>
              {project.images.length > 1 && (
                <>
                  <button className="carousel-button" onClick={handlePrevImage} title="Image précédente">&lt;</button>
                  <button className="carousel-button" onClick={handleNextImage} title="Image suivante">&gt;</button>
                </>
              )}
            </div>
          </div>
        )}
        <div className={hasImages ? "details" : "details_no_image"}>
          <div>
            <h2 className="details-titre">{project.title}</h2>
            <p>{emoji("📅 ")}{project.year} | {emoji("💼 ")}{project.company}</p>
          </div>
          <p>{project.description}</p>
          <ul>
            {project.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>

          <div>
            {project.media.map((media, i) => (
              <a key={i} href={media.url} target="_blank" rel="noopener noreferrer">
                <i className={getMediaIcon(media.type) + " icon_media"} title={media.title}></i>
              </a>
            ))}
          </div>

          <div>
            {project.keywords.map((keyword, i) => (
              <span className="keyword" key={i}>{keyword}</span>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}