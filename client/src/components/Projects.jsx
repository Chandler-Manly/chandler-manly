import React from "react";
import projectData from "../seed/projectData.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./shared/Layout";
import Search from "../components/Search";
import Sort from "../components/Sort";

import "../assets/Projects.css";

import { AZ, ZA } from "../utils/sort.js";

export default function Project(props) {
  // eslint-disable-next-line
  const [projects, setProjects] = useState(projectData);
  const [queriedProjects, setQueriedProjects] = useState([]);
  const [sortType, setSortType] = useState([]);

  // setProjects(projectData);
  const handleSearch = (event) => {
    const newProjects = projects.filter((project) =>
      project.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setProjects(newProjects, () => handleSort(sortType));
  };
  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "name-ascending":
        setQueriedProjects(AZ(queriedProjects));
        break;
      case "name-descending":
        setQueriedProjects(ZA(queriedProjects));
        break;
      default:
        setQueriedProjects(AZ(queriedProjects));
    }
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout>
      <div>
        <div className="portfolio-header">
          "Art is never finished, only abandoned"
        </div>

        <div className="portfolio-header-author">-Leonardo da Vinci</div>
        <div className="all-projects-header">
          <h1>All Projects</h1>
        </div>
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <Sort onSubmit={handleSubmit} onChange={handleSort} />
        {projects.map((project) => (
          <div className="project">
            <Link className="card" to={`/projects/${project.id}`}>
              <div className="project-image">
                <img src={project.imgURL} alt={project.name} />
              </div>
            </Link>
            <div className="project-name">{project.name}</div>
            <div className="description">{project.description}</div>
            <div className="project-links">
              <div>
                <a href={project.gitHub} className="fa fa-github">
                  GitHub Repo
                </a>
                <a href={project.link}>Deployed Site</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
