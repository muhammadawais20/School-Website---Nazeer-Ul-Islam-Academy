import React from "react";
import Slider from "react-slick";

import slider1 from "../../assets/slider1.jpg"
import slider2 from "../../assets/slider2.jpg"

import "./HeroSlider.scss";

const sliderData = [
    {
        sliderImage: slider1,
    },
    {
        sliderImage: slider2,
    },
]

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="heroSlider">
            <Slider {...settings}>
                {sliderData.map((data, index) => {
                    return (
                        <div key={index} className="sliderImage">
                            <img src={data.sliderImage} alt="Slider" />
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default HeroSlider;