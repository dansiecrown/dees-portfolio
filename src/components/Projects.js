import React from "react";
import "../styles/projects.css"
import phonie from '../assets/Phonie-app.png'
import huddle from '../assets/huddle.png'
import insta from '../assets/instapage.png'
import editor from '../assets/picture-app.png'


import Project from './Project'
import ProjectRev from './ProjectRev'



const Projects = (props) => {
  return (
    <div className="projects">

      <h1>Projects Come here!</h1>



      <Project
        src={phonie}
        title='Phonie App'
        desc='This app helps to detect your network provider using just your phone number'
        link='https://dansiecrown.github.io/phonie-app/'
      />
      <ProjectRev
        src={editor}
        title='Picture Editor'
        desc='This app allows user to upload an image, edit the image and then download the edited image'
        link='#'
      />
      <Project
        src={huddle}
        title='Huddle Website'
        desc='A static website: this is a landing page for the huddle app.'
        link='#'
      />
      <ProjectRev
        src={insta}
        title='Instapage Landing Page'
        desc='A static website: This is also a landing page for the official Instapage'
        link='#'
      />

      <hr />
    </div>
  )
}


export default Projects;