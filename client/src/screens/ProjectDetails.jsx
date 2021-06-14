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
        
        {/* <div className="project-details-name">{showProject.name}</div> */}
        <div className="show-image">
          <img src={showProject.imgURL} alt={showProject.name} />
        </div>
        <div className="show-image">
          <img src={showProject.responsive} alt={showProject.name} />
        </div>
        <div className="show-description">
          <h1>OVERVIEW</h1>
          <h2>{showProject.name}</h2>
          {showProject.description}
        </div>
        <div className="show-description-techstack">
          <h2>TECHNICAL</h2>
          <div>{showProject.technical}</div>
          <div><h2>LANGUAGES & FRAMEWORKS</h2>
            <div className="show-project-languages">
            {showProject.languages}</div>
        </div>
          <h2>PORTFOLIO LINKS</h2>
        <div className="show-project-links">
            <a href={showProject.link}>View Live Site</a>
          </div>
          <div className="view-code">
          <a href={showProject.gitHub} className="fa fa-github">View Code</a>
          </div>
          </div>


      </div>
    </Layout>
  );
}
