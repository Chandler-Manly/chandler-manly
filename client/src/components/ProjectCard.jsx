import React from 'react';
import '../assets/ProjectCard.css';
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <Link className="card" to={`/projects/${props.id}`}>
                <img className="project-card-image" src={props.imgURL} alt={props.name} />
            </Link>
        </div>
    )
}

export default ProjectCard;