import React from 'react';
import '../styles/collab.css';

export default function Collab() {
    return (
        <div className="collab">
            <div className='collab-container'>
                <div className='collab-text'>
                    <h1>Get in touch...</h1>
                    <p>...if you have a project you would like to collaborate on, you have a job for me, or if you just want to say hi. I'd be thrilled to hear from you.</p>
                </div>
                <form>
                    <input type="email" placeholder="jdoe@email.com" />
                    <textarea placeholder="Your message here..." />
                    <button>Send</button>
                </form>

            </div>
        </div>
    )
}
