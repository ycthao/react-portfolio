import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer"
import '../style/style.css';
import Portofolio from "./Portofolio";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Portofolio />
            <Footer />
        </div>
    );
};

export default Home;
