import React from "react";
import "../assets/ProjectCards.css";
import ProjectCard from "./ProjectCard";
import projectData from "../seed/projectData.json";

const ProjectCards = (props) => {
  const CARDS = projectData
    .reverse()
    .map((project, index) =>
      index < 30 ? (
        <ProjectCard
          id={project.id}
          name={project.name}
          imgURL={project.imgURL}
          key={index}
        />
      ) : null
    );

  return (
    <div>
      <div className="latest">RECENT WORK</div>
      <div className="cards">{CARDS}</div>
    </div>
  );
};

export default ProjectCards;
