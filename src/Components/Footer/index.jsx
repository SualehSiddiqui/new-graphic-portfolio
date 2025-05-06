import "./style.css";
import React from "react";
import { FaXTwitter, FaWhatsapp, FaInstagram, } from "react-icons/fa6";



const Footer = () => {
    const navLink = [
        { title: "2d Vtuber Model", link: "#2dVtuberModel" },
        { title: "Character Art", link: "#charcterArt" },
        { title: "3d Model", link: "#3dModel" },
        { title: "Twitch", link: "#twitch" },
        { title: "Reference Sheets", link: "#referenceSheets" },
        { title: "VR World", link: "#vrWorld" },
        { title: "Art Room", link: "#artRoom" },
        { title: "DND", link: "#dnd" },
        { title: "DND Group Art Work", link: "#dndGroupArtWork" },
        { title: "DND Reference Sheet", link: "#dndReferenseSheet" },
        { title: "Printable Model", link: "#printableModel" },
        { title: "OC Design", link: "#ocDesign" },
        { title: "Streaming Package", link: "#streamingPackage" },
        { title: "Logo And Banner", link: "#logoAndBanner" },
        { title: "Comic Book", link: "#comicBook" },
    ];
    return (
        <div className="main-footer">
            <h1>Contact Us</h1>
            <div className="social-icons-div">
                <a href='https://wa.me/13868469348' target='_blank' className="social-icon">
                    <FaWhatsapp />
                </a>
                <a href='https://www.instagram.com/artistry_world_?igsh=aXVtaThtMm5jMHBx' target='_blank' className="social-icon">
                    <FaInstagram />
                </a>
                <a href='https://x.com/ArtistryModel?t=5LbTgHQD_9SU7DeSiQVrXA&s=09' target='_blank' className="social-icon">
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