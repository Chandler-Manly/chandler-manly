import React from 'react';
import projectData from "../seed/projectData.json";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Layout from "./shared/Layout";
import "../assets/Projects.css";


export default function Project(props) {
// eslint-disable-next-line
  const [projects, setProjects] = useState(projectData);
  // setProjects(projectData);

  return (
    <Layout>
    <div>
            {projects.map((project) => 
        <div className="project">
                <Link className="card" to={`/projects/${project.id}`}>
                  <div className="project-image">
                    <img src={project.imgURL} alt={project.name} />
                    </div>
                  </Link>
          <div className="project-name">{project.name}</div>
          <div className="description">{project.description}</div>
                <a href={project.gitHub}>GitHub Repo</a>
                <a href={project.link}>Deployed Site</a>
      </div>)}
      </div>
      </Layout>
  )
}
