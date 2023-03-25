import React from "react";

import "./SimpleCard.scss"

const SimpleCard = (props) => {
    return (
        <div className="simpleCardContainer">
            <div className="simpleCardWrapper">
                <img className="simpleCardImage" src={props.cardImage} alt="Image" />
                <h3 className="simpleCardTitle">{props.cardTitle}</h3>
            </div>
        </div>
    )
}

export default SimpleCard;