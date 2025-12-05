import "./style.css";
import { FaXTwitter, FaWhatsapp, FaInstagram, } from "react-icons/fa6";
import FooterBG from "../../Assets/footer-bg.jpeg"
import FooterBG2 from "../../Assets/footer-bg-2.jpeg"
import { useEffect, useState } from "react";


const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Define the handler for the resize event  
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add the event listener when the component mounts
        window.addEventListener('resize', handleResize);
    }, []);
    return (
        <div className="main-footer">
            <div className="footer-bg">
                <img src={windowWidth <= 430 ? FooterBG2 :FooterBG} alt="" />
            </div>
            <h1>Contact Us</h1>
            <div className="social-icons-div mb-3">
                <a href='https://wa.me/13868469348' target='_blank' className="social-icon">
                    <FaWhatsapp />
                </a>
                <a href='https://www.instagram.com/artistry_world_' target='_blank' className="social-icon">
                    <FaInstagram />
                </a>
                <a href='https://x.com/ArtistryModel' target='_blank' className="social-icon">
                    <FaXTwitter />
                </a>
            </div>
            {/* <ul className="footer-links">
                {
                    navLink.map((value, key) => (
                        <li>
                            <a href={value.link}>
                                {value.title}
                            </a>
                        </li>
                    ))
                }
            </ul> */}
            <div className="footer-bottom">
                © 2025 Copyright: Domain.com
            </div>
        </div>
    )
};

export default Footer;