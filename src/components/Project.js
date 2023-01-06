import React from 'react';
import '../styles/projects.css'

export default function Project(props) {
    return (
        <div className="project" id='project'>
            <img alt='' src={props.src} />
            <div className="proj-details">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <a className='button' href={props.link}>View Project</a>
            </div>
        </div>
    )
}
