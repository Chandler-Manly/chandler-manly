import React from "react";
import projectData from "../seed/projectData.json";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Search from "../components/Search";
// import Sort from "../components/Sort";

import "../assets/Projects.css";

// import { AZ, ZA } from "../utils/sort.js";

export default function Project(props) {
  // eslint-disable-next-line
  const [projects, setProjects] = useState(projectData);
  // const [queriedProjects, setQueriedProjects] = useState([]);
  // const [sortType, setSortType] = useState([]);

  // setProjects(projectData);
  // const handleSearch = (event) => {
  //   const newProjects = projects.filter((project) =>
  //     project.name.toLowerCase().includes(event.target.value.toLowerCase())
  //   );
  //   setProjects(newProjects, () => handleSort(sortType));
  // };
  // const handleSort = (type) => {
  //   setSortType(type);
  //   switch (type) {
  //     case "name-ascending":
  //       setQueriedProjects(AZ(queriedProjects));
  //       break;
  //     case "name-descending":
  //       setQueriedProjects(ZA(queriedProjects));
  //       break;
  //     default:
  //       setQueriedProjects(AZ(queriedProjects));
  //   }
  // };

  // const handleSubmit = (event) => event.preventDefault();

  return (
      <div>
        <div className="portfolio-header">
          "Art is never finished, only abandoned"
        </div>
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
