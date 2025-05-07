import "./style.css";
import React from "react";
import { FaXTwitter, FaWhatsapp, FaInstagram, } from "react-icons/fa6";



const Footer = () => {
    const navLink = [
        { title: "Character Art", link: "#charcterArt" },
        { title: "OC Design", link: "#ocDesign" },
        { title: "DND", link: "#dnd" },
        { title: "3d Model", link: "#3dModel" },
        { title: "2d Vtuber Model", link: "#2dVtuberModel" },
        { title: "DND Reference Sheet", link: "#dndReferenseSheet" },
        { title: "Reference Sheets", link: "#referenceSheets" },
        { title: "DND Group Art Work", link: "#dndGroupArtWork" },
        { title: "Streaming Package", link: "#streamingPackage" },
        { title: "Logo And Banner", link: "#logoAndBanner" },
        { title: "Printable Model", link: "#printableModel" },
        { title: "VR World", link: "#vrWorld" },
        { title: "Art Room", link: "#artRoom" },
        { title: "Comic Book", link: "#comicBook" },
    ];
    
    return (
        <div className="main-footer">
            <h1>Contact Us</h1>
            <div className="social-icons-div">
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
            <ul className="footer-links">
                {
                    navLink.map((value, key) => (
                        <li>
                            <a href={value.link}>
                                {value.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="footer-bottom">
                © 2025 Copyright: Domain.com
            </div>
        </div>
    )
};

export default Footer;