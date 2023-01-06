import React from 'react'
import '../styles/projs.css'

import phonie from '../assets/Phonie-app.png'

export default function Projs() {
    return (
        <div className="projs">

            <div className='contain'>
                <img src={phonie} />
                <div className="proj">
                    <h3>Image Editor</h3>
                    <p>Image Editor is a web app that allows users to upload an image, edit the image and then download the edited image.</p>
                    <a href="https://dansiecrown.github.io/image-editor/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        </div>
    )
}
