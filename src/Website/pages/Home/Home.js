import React, { useState, useEffect, Fragment } from "react";
import ApplyForAdmission from "../../components/ApplyForAdmission/ApplyForAdmission";
import FacilitiesSection from "../../components/FacilitiesSection/FacilitiesSection";
import Footer from "../../components/Footer/Footer";
import GallerySection from "../../components/GallerySection/GallerySection";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import OurMission from "../../components/OurMission/OurMission";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";

const Home = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000)
    }, []);

    return (
        <Fragment>
            {
                !loading ?
                    <div className="Home">
                        <Navbar />
                        <HeroSlider />
                        <WelcomeSection />
                        <FacilitiesSection />
                        <GallerySection />
                        <OurMission />
                        <ApplyForAdmission />
                        <Footer />
                        <ScrollToTopButton />
                    </div>
                    :
                    <Loader />
            }
        </Fragment>
    );
}

export default Home;
