import React from "react";
import BorderLine from "../BorderLine/BorderLine";
import { useNavigate } from 'react-router-dom';

import admissionImage from "../../assets/admission.png";

import "./ApplyForAdmission.scss";

const ApplyForAdmission = () => {

    const navigation = useNavigate();

    const ApplyForAdmissionHandler = () => {
        navigation("apply-for-admission");
        console.log("Apply For Admission");
    }

    return (
        <div className="admissionSection">
            <div className="admissionWrapper">
                <div className="admissionImage">
                    <img src={admissionImage} alt="Admission" />
                </div>

                <div className="admissionContent">
                    <h1 className="admissionHeading">Apply For Admission</h1>
                    <div className="missionBorderLine">
                        <BorderLine
                            maxWidth='100px'
                            color='#00a14b'
                            marginTop='5px'
                            marginBottom='30px'
                        />
                    </div>
                    <p className="admissionDetails">
                        Nazeer ul Islam Academy a well known in our Town, grooming the youth in different aspects of social, cultural and religious norms. Working for the positve future is our first priority, Come join hands with us.
                    </p>
                    <button className="admissionButton" onClick={ApplyForAdmissionHandler}>
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ApplyForAdmission;