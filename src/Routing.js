import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Website/pages/Home/Home";
import ContactUs from "./Website/pages/ContactUs/ContactUs";
import Admission from "./Website/pages/Admission/Admission";

const RoutingFunction = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                </Route>

                <Route path="/contact-us">
                    <Route index element={<ContactUs />} />
                </Route>

                <Route path="/apply-for-admission">
                    <Route index element={<Admission />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutingFunction;