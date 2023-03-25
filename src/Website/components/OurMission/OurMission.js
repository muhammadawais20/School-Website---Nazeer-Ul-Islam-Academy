import React from "react";
import BorderLine from "../BorderLine/BorderLine";

import "./OurMission.scss";

const OurMission = () => {
    return (
        <section className="missionContainer">
            <div className="missionWrapper">
                <div className="missionTop">
                    <h1 className="missionHeading">Our Mission</h1>
                    <div className="missionBorderLine">
                        <BorderLine
                            maxWidth='100px'
                            color='#f8f7fe'
                            marginTop='5px'
                            marginBottom='20px'
                        />
                    </div>
                </div>
                <p className="missionContent">We are committed to providing a positive learning environment that advocates considerate, responsible, and emotionally healthy behaviors. Each individual student will feel a part of the Central community, which promotes positive behavioral development.</p>
            </div>
        </section>
    )
}

export default OurMission;