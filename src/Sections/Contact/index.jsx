import React from 'react';
import "./style.css";
import AboutMeImg from "../../Assets/contact-sec.png"
import { Container } from 'react-bootstrap';
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";


const Contact = () => {
    return (
        <div className='contact-sec-main'>
            <Container className='contact-sec-container'>
                <div className='contact-sec-img'>
                    <img src={AboutMeImg} alt="AboutMeImg" />
                </div>
                <div className='contact-sec-text'>
                    <h1 className='contact-hd-1'>Thank</h1>
                    <h1 className='contact-hd-2'>You!</h1>
                    <p>
                        Let's work together
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Contact;