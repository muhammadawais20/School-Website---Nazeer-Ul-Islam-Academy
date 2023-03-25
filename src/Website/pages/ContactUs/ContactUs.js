import React from "react";
import { useState, useEffect, Fragment } from "react";
import { toast, ToastContainer } from "react-toastify";

import ContactUsImage from "../../assets/laptop.png"
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";

import "./ContactUs.scss";

const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState(null);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const ContactUsHandler = (e) => {
        e.preventDefault();
        console.log(` name: ${name}, email: ${email}, contact: ${contact}, message: ${message}`);

        setName("");
        setContact("");
        setEmail("");
        setMessage("");

        const phoneValidation = new RegExp(/^03\d{9}$/);

        if (!phoneValidation.test(contact)) {
            toast.warning("Contact should be a valid number!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

        else {
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
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000)
    }, []);

    return (
        <Fragment>
            {
                !loading ?
                    <Layout>
                        < section className="ContactUsContainer" >
                            <div className="ContactUsWrapper">
                                <div className="ContactUsLeft">
                                    <img className="ContactUsImage" src={ContactUsImage} alt="Contact Us" />
                                </div>

                                <div className="ContactUsRight">
                                    <form className="ContactUsForm" onSubmit={ContactUsHandler}>
                                        <input className="ContactUsField" type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
                                        <input className="ContactUsField" type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                        <input className="ContactUsField" type="number" placeholder="Phone Number" onChange={(e) => setContact(e.target.value)} required />
                                        <textarea className="ContactUsTextArea" rows="5" placeholder="Share your Message" onChange={(e) => setMessage(e.target.value)} required />
                                        <button className="ContactUsButton">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <ToastContainer />
                        </section >
                    </Layout >
                    :
                    <Loader />
            }
        </Fragment >
    )
}

export default ContactUs;