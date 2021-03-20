import React from "react";
import Navbar from "../components/Navbar/navbar";
import ContactPage from "../components/ContactPage/contactPage";
import Footer from "../components/Footer/footer";
import '../style/style.css';


const Contact = () => {
    return (
        <div>
            <Navbar />
            <ContactPage />
            <Footer />
        </div>
    );
};

export default Contact;
