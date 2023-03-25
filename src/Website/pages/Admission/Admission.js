import React from "react";
import { useState, useEffect, Fragment } from "react";
import { toast, ToastContainer } from "react-toastify";

import AdmissionImage from "../../assets/qoute.png"
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";

import "./Admission.scss";

const classesDetails = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const session = ["Current", "Upcoming"];
const genderList = ["Male", "Female", "Prefer not to say"];

const Admission = () => {

    const [parentName, setParentName] = useState("")
    const [studentName, setStudentName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState(null);
    const [address, setAddress] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [previousClass, setPreviousClass] = useState("");
    const [desiredClass, setDesiredClass] = useState(null);
    const [admissionSession, setAdmissionSession] = useState("");
    const [loading, setLoading] = useState(false);

    const AdmissionHandler = (e) => {
        e.preventDefault();
        console.log(`parentName: ${parentName}, studentName: ${studentName}, email: ${email}, contact: ${contact}, address: ${address},
        age:${age}, gender:${gender}, previousClass: ${previousClass}, desiredClass: ${desiredClass}, admissionSession:${admissionSession}`);

        setParentName("");
        setStudentName("");
        setContact("");
        setEmail("");
        setAddress("");
        setAge("");
        setGender("");
        setPreviousClass("");
        setDesiredClass("");
        setAdmissionSession("")

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
                        <section className="AdmissionContainer">
                            <div className="AdmissionWrapper">
                                <div className="AdmissionLeft">
                                    <img className="AdmissionImage" src={AdmissionImage} alt="Contact Us" />
                                </div>

                                <div className="AdmissionRight">
                                    <form className="AdmissionForm" onSubmit={AdmissionHandler}>
                                        <input className="AdmissionField" type="text" placeholder="Parent Name" onChange={(e) => setParentName(e.target.value)} required />
                                        <input className="AdmissionField" type="text" placeholder="Student Name" onChange={(e) => setStudentName(e.target.value)} required />
                                        <input className="AdmissionField" type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                        <input className="AdmissionField" type="number" min={0} placeholder="Phone Number" onChange={(e) => setContact(e.target.value)} required />
                                        <input className="AdmissionField" type="text" placeholder="Current Address" onChange={(e) => setAddress(e.target.value)} required />
                                        <div className="AdmissionFieldSelect">
                                            <input className="AdmissionField" id="studentAge" type="number" min={0} placeholder="Student Age" onChange={(e) => setAge(e.target.value)} required />
                                            <select className="AdmissionFieldOption" onChange={(e) => setGender(e.target.value)}>
                                                <option>Select Gender</option>
                                                {genderList.map((selectGender) => {
                                                    return (
                                                        <option>{selectGender}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="AdmissionFieldSelect">
                                            <select className="AdmissionFieldOption" onChange={(e) => setPreviousClass(e.target.value)}>
                                                <option>Select Previous Class</option>
                                                {classesDetails.map((selectClass) => {
                                                    return (
                                                        <option>{selectClass}</option>
                                                    )
                                                })}
                                            </select>
                                            <select className="AdmissionFieldOption" onChange={(e) => setDesiredClass(e.target.value)}>
                                                <option>Select Desired Class</option>
                                                {classesDetails.map((selectClass) => {
                                                    return (
                                                        <option>{selectClass}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="AdmissionFieldSelect">
                                            <select className="AdmissionFieldOption" id="admissionSession" onChange={(e) => setAdmissionSession(e.target.value)}>
                                                <option>Select Desired Session</option>
                                                {session.map((selectSession) => {
                                                    return (
                                                        <option>{selectSession}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <button className="AdmissionButton">Apply For Admission</button>
                                        <p className="AdmissionDetailsNote">On successful submission of above details, we will contact you for further process.</p>
                                    </form>
                                </div>
                            </div>
                            <ToastContainer />
                        </section>
                    </Layout>
                    :
                    <Loader />
            }
        </Fragment>
    )
}

export default Admission;