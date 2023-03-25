import React from "react";

import BorderLine from "../BorderLine/BorderLine";

import schoolImage from "../../assets/logo.png";

import "./WelcomeSection.scss";

const WelcomeSection = () => {
    return (
        <section className="welcomeSection" id="about">
            <div className="welcomeWrapper">
                <div className="welcomeContent">
                    <h1 className="welcomeHeading">Welcome Here</h1>
                    <div className="missionBorderLine">
                        <BorderLine
                            maxWidth='100px'
                            color='#f8f7fe'
                            marginTop='5px'
                            marginBottom='20px'
                        />
                    </div>
                    <p className="welcomeQoute">
                        Nazeer ul Islam Academy a well known in our Town, grooming the youth in different aspects of social, cultural and religious norms. Working for the positive future is our first priority.
                        <br /> <br /> <b>Step forward, Come closer, <br /> Stay confident, Fear aside and <br /> Join hands with us, We welcomes you.</b></p>
                </div>
                <div className="welcomeImage">
                    <img src={schoolImage} alt="Nazeer Ul Islam Islamic Academy" />
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection;