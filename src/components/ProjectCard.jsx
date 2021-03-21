import React from 'react';

const ProjectCard = ({title, description, imgSrc}) => {
    return (
        <article>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={imgSrc} alt="project logo"></img>
        </article>
    )
}

export default ProjectCard;