import React from "react";
import Hero from "../Hero";
import NavBar from "../navigationBar/NavBar.jsx";
import AdmissionProcess from "../stepper/AdmissionProcess.jsx";
import ScholarShips from "../ScholarShips.jsx";
import EducativeOffer from "../educativeOffer/EducativeOffer.jsx";
import CollegeLife from "../collegeLife/CollegeLife.jsx";
import Location from "../geographicLocation/Location.jsx";
import PostgraduateOffer from "../postgraduateOffer/PostgraduateOffer.jsx";

export const Home = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <AdmissionProcess/>
            <EducativeOffer/>
            <PostgraduateOffer/>
            <ScholarShips/>
            <CollegeLife/>
            <div className="bg-unsij-green-950">
            <Location/>
            </div>
        </>
    );
};
export default Home;
