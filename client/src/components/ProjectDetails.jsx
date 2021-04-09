import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import projectData from "../seed/projectData.json";


export default function Project(props) {

  const params = useParams();

  const showProject = projectData.find((project) => params.id === project.id);


  return (
    <Layout>
    <div>
        <h3>{showProject.name} Project Details</h3>
        <div className='show-image'>
        <img src={showProject.imgURL} alt={showProject.name}/>
        </div>
          <div className="show-description">
          <h4>Project Description</h4>
          {showProject.description}
        </div>
        <div className="show-description- techstack">
          <h4>Project Description</h4>
          {showProject.quote}
        </div>
        <div className="portfolio-links">
          <a href={showProject.link}>Netlify Deployed Link</a><br/>
          <a href={showProject.gitHub} className="fa fa-github">Github Repo</a>
        </div>
        
      </div>
      </Layout>
  )
}
