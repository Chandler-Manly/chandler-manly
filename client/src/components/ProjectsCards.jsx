import React from "react";
import { Link } from "react-router-dom";
import projectData from "../seed/projectData.json";
import { useState } from "react";

export default function ProjectsCards() {
  const [projects, setProjects] = useState(projectData);

  return (
    <div>
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
  );
}
