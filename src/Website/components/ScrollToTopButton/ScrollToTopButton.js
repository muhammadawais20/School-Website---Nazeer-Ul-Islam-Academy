import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

import "./ScrollToTopButton.scss";

const ScrollToTopButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="scrollToTopButtonContainer">
            <FontAwesomeIcon icon={faArrowCircleUp} className="scrollToTopButton" onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }} />
        </div>
    )
}

export default ScrollToTopButton;