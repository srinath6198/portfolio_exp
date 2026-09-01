import React, { useState } from 'react';
import { featuredProjects } from '../../data/portfolioData';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import './Projects.scss';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="editorial-projects-section section-spacing">
      <div className="container">
        {/* Section Heading */}
        <div className="projects-header-row">
          <div>
            <span className="section-kicker">Selected Work</span>
            <h2 className="projects-title">
              Meet the products <span className="serif-accent">&amp; platforms</span>
            </h2>
          </div>
          <p className="projects-subtitle">
            A curated selection of high-impact web applications, real-time terminals, and design systems.
          </p>
        </div>

        {/* 3-Column Projects Grid matching reference */}
        <div className="projects-3col-grid">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="project-editorial-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-header-meta">
                <span className="project-category">{project.category}</span>
                <h3 className="project-name">{project.title}</h3>
                <span className="project-client">{project.client} • {project.role}</span>
              </div>

              <div className="project-photo-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="editorial-img project-photo"
                  loading="lazy"
                />
                <div className="photo-hover-pill">
                  <span>View Details</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>

              <div className="card-footer-details">
                <p className="project-summary">{project.description}</p>
                <div className="project-tech-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Modal for Deep Project Review */}
        {selectedProject && (
          <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="project-modal-dialog" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="modal-hero-img-wrap">
                <img src={selectedProject.image} alt={selectedProject.title} className="editorial-img" />
              </div>

              <div className="modal-body-content">
                <span className="modal-category">{selectedProject.category}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-desc">{selectedProject.description}</p>

                <div className="modal-stats-box">
                  <span className="stats-highlight">{selectedProject.stats}</span>
                </div>

                <div className="modal-tags-list">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="tag-chip">{tag}</span>
                  ))}
                </div>

                <div className="modal-actions-row">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-pill-primary modal-action-btn"
                  >
                    <span>View Repository / Case</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
