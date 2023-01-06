import React from 'react'
import { useState } from 'react'
import '../styles/projs.css'

import projData from '../proj-data'









export default function Projs() {
    const [projects, setProjects] = useState(projData)
    // const [showDetails, setShowDetails] = useState(false)

    const displayDetails = (index) => {
        const newProjects = [...projects];
        newProjects[index].showDetails = true;
        setProjects(newProjects);
    }

    const hideDetails = (index) => {
        const newProjects = [...projects];
        newProjects[index].showDetails = false;
        setProjects(newProjects);
    }

    const proj = projects.map((proj, index) => {
        return (
            <div
                className='proj-card'
                style={{ backgroundImage: `url(${proj.image})`, width: '340px' }}
                key={proj.id}
                onMouseEnter={() => { displayDetails(index) }}
                onMouseLeave={() => { hideDetails(index) }}
            >
                {proj.showDetails === true ? <div className="overlay" key={proj.id}>
                    <h4>{proj.title}</h4>
                    <p>{proj.description}</p>
                    <a href={proj.link} target='_blank' rel="noreferrer">View Project</a>
                </div> : null}

            </div>
        )
    })




    return (
        <div className="projs" id='project'>

            <h1>Projects</h1>
            <p>Here are some projects I have been privileged to work on. My experience however, is not limited to what I have here as I have contributed to several different projecs.</p>

            <div className="proj-container">
                {proj}
            </div>
        </div >
    )
}
