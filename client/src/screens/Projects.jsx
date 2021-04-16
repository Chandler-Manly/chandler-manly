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
    <Layout backgroundColor={"#212a2f"}>
        <div className="portfolio-header">
        "Art is never finished, only abandoned"
        </div>
      <div className="portfolio">
        Open Source Projects
      </div>
      <div></div>
      <div className="project-cards">
        {projects.map((project) => (
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={project.imgURL} alt={project.name} />
              </div>

              <div className="flip-card-back">
                <h1>{project.name}</h1>
                <p>{project.onesentencedescription}</p>
                <Link to={`/projects/${project.id}`}>
                  <p>View Details</p>
                  </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Layout>
  );
}
