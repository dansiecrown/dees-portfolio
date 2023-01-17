import React from 'react';
import dan from '../assets/dan.jpg'
import '../styles/Main.css'

const Main = () => {
    return (
        <section className="top" id="main" >
            <div className="top-left">
                <h2 className="Greeting"><mark>Hello there 👋,</mark> I'm Daniel Omoregbe.</h2>
                <p>A frontend engineer who is currently on the path to becoming a fullstack, I am comfortable with using
                    HTML, CSS, Javascript, Reactjs, Bootstrap, Tailwind, Git and Github, and Python. Well, that is not all.
                    I am also a graphics designer with over 8 years of experience using CorelDraw Suite, Adobe Photoshop,
                    Adobe Illustrator, Adobe XD, After Effect and mobile apps like Canva. Some time ago I worked with some
                    colleague on some virtual reality project using Amazon Sumerian - We actually made some awesome
                    projects. I love to dance, sing and do music basically.</p>

                <div className="top-icons">

                    <a href="https://twitter.com/dansiecrown" target="_blank" rel="noopener noreferrer"> <i className="icon-twitter"></i></a>
                    <a href="https://www.facebook.com/dansiecrown/" target="blank" rel="noopener noreferrer"><i className="icon-facebook"></i></a>
                    <a href="https://www.instagram.com/dansiecrown/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a>
                    <a href="https://github.com/dansiecrown" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
                    <a href="https://www.linkedin.com/in/dansiecrown/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin"></i></a>
                    <span> -- Follow me.</span>
                </div>

                <button>See My Resume <i className="icon-file-alt"></i></button>

            </div>
            <div className="top-right">
                <img src={dan} alt="Developer" />
            </div>
        </section>


    )
}


export default Main;