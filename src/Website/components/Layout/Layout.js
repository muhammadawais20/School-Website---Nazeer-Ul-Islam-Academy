import React, { Fragment } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Layout = (props) => {
    return (
        <Fragment>
            <Navbar />
            <Fragment>
                {props.children}
            </Fragment>
            < Footer />
        </Fragment>
    )
}

export default Layout;