import React from "react";

import SimpleCard from "../Cards/SimpleCard";
import BorderLine from "../BorderLine/BorderLine";

import laptopImage from "../../assets/laptop.png";
import IslamicEducationImage from "../../assets/IslamicEducation.png";
import booksImage from "../../assets/books.png";

import "./FacilitiesSection.scss"

const cardData = [
    {
        cardImage: laptopImage,
        cardTitle: "Computer Lab",
    },
    {
        cardImage: IslamicEducationImage,
        cardTitle: "Islamic Education",
    },
    {
        cardImage: booksImage,
        cardTitle: "Quality Education",
    },
]

const FacilitiesSection = () => {
    return (
        <section className="facilitiesContainer" id="facilities">
            <div className="facilitiesSection">
                <h1 className="facilitiesHeading">Facilities</h1>
                <div className="facilitiesBorderLine">
                    <BorderLine
                        maxWidth='75px'
                        color='#00a14b'
                        marginTop='15px'
                        marginBottom='15px'
                    />
                </div>
                <div className="facilitiesWrapper">
                    {cardData.map((data) => {
                        return (
                            <SimpleCard
                                cardImage={data.cardImage}
                                cardTitle={data.cardTitle}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FacilitiesSection;