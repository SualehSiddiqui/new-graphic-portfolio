import React from 'react';
import "./style.css";
import AboutMeImg from "../../Assets/about-sec.jpg"
import { Container } from 'react-bootstrap';
import { IoMail } from "react-icons/io5";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";


const About = () => {
    return (
        <div className='about-sec-main'>
            <Container className='about-sec-container'>
                <div className='about-sec-text'>
                    <h1>Hello 👋 ,</h1>
                    <p>
                        I'm a graphic artist and visual designer passionate about crafting meaningful,
                        illustration-led experiences that connect with people on a deeper level.
                    </p>
                    <p>
                        I consider myself a detail-focused, dedicated creative who’s constantly learning,
                        evolving, and striving to bring unique visions to life—one design at a time.
                    </p>
                    <a href='#' className='about-social-icons'>
                        <span className='social-icons'>
                            <IoMail />
                        </span>
                        <span>
                            demo@gmail.com
                        </span>
                    </a>
                    <a href='https://x.com/ArtistryModel' target='_blank' className='mt-1 about-social-icons'>
                        <span className='social-icons'>
                            <FaXTwitter />
                        </span> 
                        <span>
                            ArtistryModel
                        </span>
                    </a>
                    <a href='https://www.instagram.com/artistry_world_' target='_blank' className='mt-1 about-social-icons'>
                        <span className='social-icons'>
                            <FaInstagram />
                        </span>
                        <span>
                            artistry_world_
                        </span>
                    </a>
                </div>
                <div className='about-sec-img'>
                    <img src={AboutMeImg} alt="AboutMeImg" />
                </div>
            </Container>
        </div>
    )
}

export default About;