import React from "react";
import Slider from "react-slick";
import Card from "../Cards/Card";
import BorderLine from "../BorderLine/BorderLine";

import activity1 from "../../assets/activity1.jpg";
import activity2 from "../../assets/activity2.jpg";
import activity3 from "../../assets/activity3.jpg";
import activity4 from "../../assets/activity4.jpg";
import activity5 from "../../assets/activity5.jpg";

import "./GallerySection.scss";

const cardData = [
    {
        cardImage: activity1,
        cardTitle: "Quiz Activity",
        cardDescription: "Students are actively participating in Quiz activity conduct in junior classes."
    },
    {
        cardImage: activity2,
        cardTitle: "Team Work Activity",
        cardDescription: "Montessori classes had an Team Work Activity to encourage and motivate the students for collective efforts."
    },
    {
        cardImage: activity3,
        cardTitle: "Color Activity",
        cardDescription: "Montessori classes had an Activity on Color's day, they performed various activities and participate actively, they also enjoyed with their classmates."
    },
    {
        cardImage: activity4,
        cardTitle: "Cricket Match",
        cardDescription: "Secondary classes had an Cricket Match Activity where they showcase their talent, a well played game became a memory for all of us."
    },
    {
        cardImage: activity5,
        cardTitle: "14th August",
        cardDescription: "We celebrated the 75th anniversary of national independence on 14th August with traditional zeal and fervor to commemorate the day."
    },
]

const GallerySection = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrow: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="galleryContainer" id="events">
            <div className="gallerySection">
                <h1 className="galleryHeading">Past Events</h1>
                <div className="galleryBorderLine">
                    <BorderLine
                        maxWidth='75px'
                        color='#00a14b'
                        marginTop='15px'
                        marginBottom='15px'
                    />
                </div>
                <div className="galleryWrapper">
                    <Slider {...settings}>
                        {cardData.map((data) => {
                            return (
                                <Card
                                    cardImage={data.cardImage}
                                    cardTitle={data.cardTitle}
                                    cardDescription={data.cardDescription}
                                />
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default GallerySection;