import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/shared/Layout";
import projectData from "../seed/projectData.json";
import "../assets/ProjectDetails.css";



export default function Project(props) {
  const params = useParams();

  const showProject = projectData.find((project) => params.id === project.id);

  return (
    <Layout backgroundColor={"rgb(207, 250, 218)"}>
      <div className="project-details">
        
        <div className="project-details-name">{showProject.name} Project Details</div>
        <div className="show-image">
          <img src={showProject.imgURL} alt={showProject.name} />
        </div>
        <div className="show-description">
          <h2>Overview</h2>
          {showProject.description}
        </div>
        <div className="show-description-techstack">
          <h2>Technical</h2>
          <div>{showProject.technical}</div>
          <div><h2>Languages & Frameworks</h2>
            <div className="show-project-languages">
            {showProject.languages}</div>
        </div>
        <div className="show-project-links">
          <h2>Portfolio Links</h2>
          <a href={showProject.link}>View Live Site</a>
          <a href={showProject.gitHub} className="fa fa-github">View Code</a>
          </div>
          </div>


      </div>
    </Layout>
  );
}
