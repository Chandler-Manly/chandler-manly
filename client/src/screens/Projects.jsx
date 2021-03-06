import React from "react";
import projectData from "../seed/projectData.json";
import { useState } from "react";
import Layout from '../components/shared/Layout';
import { Link } from "react-router-dom";
import "../assets/Projects.css";

export default function Projects(props) {
  // eslint-disable-next-line
  const [projects, setProjects] = useState(projectData);
 
  return (
    <Layout>
      <div className="portfolio">
OPEN SOURCE PROJECTS      </div>
      <div></div>
      <div className="project-cards">
        {projects.map((project) => (
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={project.imgURL} alt={project.name} />
              </div>

              <div className="flip-card-back">
                <div className="project-name"><h3>{project.name}</h3></div>
                <Link to={`/projects/${project.id}`}>
                  <p>View Details</p>
                  </Link>
              </div>
            </div>
          </div>
        ))}
        <div>
        </div>
      </div>
      </Layout>
  );
}
