import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/logo.png";
import SendIcon from "../../assets/send-icon.webp";

import "./Footer.scss";

const Footer = () => {

    const [subscriptionEmail, setSubscriptionEmail] = useState("");

    const SubscriptionEmailHandler = (e) => {
        e.preventDefault();
        console.log(`subscriptionEmail: ${subscriptionEmail}`);

        toast.success("Response received successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        },
        ).catch(error => {
            toast.error("Failed, Please try again!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        })
    }

    return (
        <section className="footerSection">
            <div className="footerWrapper">
                <div className="footerLeft">
                    <img src={Logo} alt="" />
                    <p>
                        <span>© &nbsp; 2023</span>
                        <span> All Rights Reserved by Nazeer Ul Islam Islamic Academy.</span>
                    </p>
                </div>

                <div className="footerRight">
                    <div className="footerRightContainer">
                        <div className="footerContactContainer">
                            <h6 className="footerContactHeading">Contact Us</h6>
                            <div className="footerContact">
                                <FontAwesomeIcon icon={faPhone} className="footerIcon" />
                                <p>03045678643</p>
                            </div>
                            <div className="footerAddress">
                                <FontAwesomeIcon icon={faLocationDot} className="footerIcon" />
                                <p>Orangi Town</p>
                            </div>
                            <div className="footerEmail">
                                <FontAwesomeIcon icon={faEnvelope} className="footerIcon" />
                                <p>xyz@gmail.com</p>
                            </div>
                        </div>

                        <div className="footerNewsLettterContainer">
                            <h6 className="footerNewsLettterHeading">News Letter</h6>
                            <p className="footerNewsLettterText">Enter your email address to get the latest School news.</p>
                            <form className="footerNewsLettterInput" onSubmit={SubscriptionEmailHandler}>
                                <input type="email" placeholder="Your email" required onChange={(e) => setSubscriptionEmail(e.target.value)} />
                                <button className="footerNewsLettterButton">
                                    <img src={SendIcon} alt="Send" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Footer;