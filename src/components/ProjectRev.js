import React from 'react';
import '../styles/projects.css'

export default function ProjectRev(props) {
    return (
        <div className="project-rev">
            <img alt='' src={props.src} />
            <div className="proj-details">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <a className='button' href={props.link}>View Project</a>
            </div>
        </div>
    )
}
