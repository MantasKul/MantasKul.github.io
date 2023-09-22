import React from "react";

import "./Card.css";

export const Card = ({
    jsonVar
}) => {
    console.log(jsonVar);
    return (
        <div className="card-container">
            {process.env.PUBLIC_URL + jsonVar.imgSrc && jsonVar.imgAlt && <img className="card-img" src={ process.env.PUBLIC_URL + jsonVar.imgSrc } alt={ jsonVar.imgAlt } />}
            <p className="card-title">{ jsonVar.title }</p>
            <p className="card-description">{ jsonVar.description }</p>
            <a className="card-btn" href={ jsonVar.link } target="_blank">{ jsonVar.buttonText }</a>
        </div>
    )
}

/*export const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,
}) => {
    return (
        <div className="card-container">
            {imgSrc && imgAlt && <img className="card-img" src={ imgSrc } alt={ imgAlt } />}
            <p className="card-title">{ title }</p>
            <p className="card-description">{ description }</p>
            <a className="card-btn" href={ link } target="_blank">{ buttonText }</a>
        </div>
    )
}*/