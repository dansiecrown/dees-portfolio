import React from 'react'
import "../styles/Header.css"


const Header = () => {



  return (
    <header>
      <nav>
        <h2>.</h2>


        <div>
          <a href="https://twitter.com/dansiecrown" target="_blank" rel="noopener noreferrer"> <i className="icon-twitter"></i></a>
          <a href="https://www.facebook.com/dansiecrown/" target="blank" rel="noopener noreferrer"><i className="icon-facebook"></i></a>
          <a href="https://www.instagram.com/dansiecrown/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a>
          <a href="https://github.com/dansiecrown" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
          <a href="https://www.linkedin.com/in/dansiecrown/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin"></i></a>
        </div>
      </nav>
    </header>
  )
}

export default Header