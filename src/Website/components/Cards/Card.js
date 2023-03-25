import React from "react";

import "./Card.scss";

const Card = (props) => {
    return (
        <div className="cardsContent">
            <div className="cardImage">
                <img src={props.cardImage} alt="Image" />
            </div>

            <div className="cardDetails">
                <h3 className="cardTitle">{props.cardTitle}</h3>
                <p className="cardDescription">{props.cardDescription}</p>
            </div>
        </div>
    );
}

export default Card;
