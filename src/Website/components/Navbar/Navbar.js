import React, { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import Button from "../Button/Button";
import { useNavigate, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/logo.png";

import "./Navbar.scss";

const Navbar = () => {

    const [clicked, setClicked] = useState(false);
    const [sticky, setSticky] = useState(false);

    const location = useLocation();
    const navigation = useNavigate();

    const IconHandler = () => {
        setClicked(!clicked);
    }

    const ContactHandler = () => {
        navigation("/contact-us");
        console.log("Clicked!");
    }

    const CloseSidebar = () => {
        setClicked(false);
    }

    const MoveToHomeHandler = () => {
        navigation("/");
    }

    useEffect(() => {
        const StickyNavbarHandler = () => {
            setSticky(window.scrollY > 200);
        }

        window.addEventListener('scroll', StickyNavbarHandler);
        return () => window.removeEventListener('scroll', StickyNavbarHandler)
    })

    return (
        <nav className={`navbarContainer ${sticky ? "stickyNavbar" : ""}`}>
            <div className="navbarWrapper">
                <h1 className="navbarLogo" onClick={MoveToHomeHandler}>
                    <img className="logo" src={Logo} alt="Logo" />
                </h1>

                <div className="menuIcon" onClick={IconHandler}>
                    <FontAwesomeIcon icon={clicked ? faXmark : faBars} />
                </div>

                <ul className={clicked ? "navbarItems active" : "navbarItems"}>
                    {MenuItems.map((items, index) => {
                        return (
                            <HashLink scroll={
                                window.innerWidth < 768 ?
                                    (el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                    :
                                    (el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                className={`${items.itemClass}`}
                                to={location.pathname === "/apply-for-admission" || location.pathname === "/contact-us" ? items.url[0] : items.url[1]}>
                                <li key={index} onClick={CloseSidebar} >
                                    {items.title}
                                </li>
                            </HashLink>
                        )
                    })}
                </ul>

                <Button onClick={ContactHandler}>
                    Contact
                </Button>
            </div>
        </nav>
    );
}

export default Navbar;
