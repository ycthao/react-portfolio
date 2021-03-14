import React from "react";
import Navbar from "../components/Navbar/navbar";
import Homepage from "../components/Homepage/homepage";
import Footer from "../components/Footer/footer"
import "../style/style.css"


const Home = () => {
    return (
        <div>
            <Navbar />
            <Homepage />
            <Footer />
        </div>
    );
};

export default Home;
