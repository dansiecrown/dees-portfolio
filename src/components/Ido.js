import React from 'react';
import Card from './Card';
import '../styles/Ido.css';
import html from '../assets/html.png';
import firebase from '../assets/database.png';
import js from '../assets/js-file.png';
import css from '../assets/css-3.png';
import bootstrap from '../assets/bootstrap.png';
import physics from '../assets/physics.png';
import python from '../assets/python.png';
import photo from '../assets/photoshop.png';
import illust from '../assets/illustrator.png';
import afterEffect from '../assets/after-effects.png';




const Ido = () => {
    return (
        <div className="container" >

            <hr />

            <h3 id="Ido">Some tools I'm privileged to work with...</h3>


            <div className="card-container">
                <Card
                    src={html}
                    alt={"Graphics design illustration"}
                    perc={"95%"}
                    text={"HTML5"}
                />
                <Card
                    src={css}
                    alt={"css icon"}
                    perc={"92%"}
                    text={"CSS3"}
                />
                <Card
                    src={js}
                    alt={"js icon"}
                    perc={"88%"}
                    text={"JS"}
                />
                <Card
                    src={bootstrap}
                    alt={"Graphics design illustration"}
                    perc={"90%"}
                    text={"Bootstrap"}
                />
                <Card
                    src={physics}
                    alt={"React Icon"}
                    perc={"70%"}
                    text={"Reactjs"}
                />
                <Card
                    src={firebase}
                    alt={"Firebase Icon"}
                    perc={"70%"}
                    text={"Firebase"}
                />
                <Card
                    src={python}
                    alt={"python Icon"}
                    perc={"70%"}
                    text={"Python"}
                />
                <Card
                    src={photo}
                    alt={"Photoshop Icon"}
                    perc={"70%"}
                    text={"Photoshop"}
                />
                <Card
                    src={illust}
                    alt={"Illustrator Icon"}
                    perc={"50%"}
                    text={"Illustrator"}
                />
                <Card
                    src={afterEffect}
                    alt={"After Effect Icon"}
                    perc={"30%"}
                    text={"After Effect"}
                />



            </div>


            <hr />

        </div>
    )
}

export default Ido;
