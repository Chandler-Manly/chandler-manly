import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import projectData from "../seed/projectData.json";
import { useState } from "react";


export default function Project(props) {

  const project = props.projectData;

  return (
    <Layout>
    <div>
        <div className="project">
          <Link className="card" to={`/projects/${project.id}`}>
                  <img src={project.imgURL} alt={project.name} />
                  </Link>
          <div className="name">{project.name}</div>
          <div className="description">{project.description}</div>
                <a href={project.gitHub}>GitHub Repo</a>
                <a href={project.link}>Deployed Site</a>
                <div>"{project.quote}"-Chandler</div>
      </div>
      </div>
      </Layout>
  )
}
