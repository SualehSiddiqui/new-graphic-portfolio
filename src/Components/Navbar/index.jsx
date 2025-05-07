import { Container } from "react-bootstrap";
import "./style.css";
import Logo from "../../Assets/logo.png";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);

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
        <>
            <div className="main-header">
                <div className="scroll-header">
                    <Container className="nav-container">
                        <a href="/" className="logo-div">
                            <img src={Logo} alt="Logo" />
                        </a>
                        <ul className="nav-links-div">
                            {navLink.map(navItem => (
                                <li key={navItem.title}>
                                    <a href={navItem.link} className="">
                                        {navItem.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <span className="menu-icon" onClick={() => setToggleNav(true)} aria-label="Open Menu">
                            <IoMenu />
                        </span>
                    </Container>
                </div>
            </div>

            {toggleNav && (
                <div className="slider-main">
                    <h2>
                        <span onClick={() => setToggleNav(false)}>
                            <ImCross />
                        </span>
                    </h2>
                    <ul>
                        {navLink.map((navItem) => (
                            <li key={navItem.title}>
                                <a href={navItem.link} className="res-nav-links">
                                    {navItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
