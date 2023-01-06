import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.src} alt={props.alt} />
            <div className="text">
                <h1>{props.perc}</h1>
                <p>{props.text}
                </p>
            </div>
        </div>
    )
}
