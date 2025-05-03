import React from 'react';
import "./style.css"
import Navbar from '../Navbar';
import { Container } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='main-hero-div'>
            <Navbar />
            <Container className='hero-container'>
                <div className='hero-img'></div>
                <div className='hero-text'>
                    <TypeAnimation
                        sequence={[
                            'Your World, Your Style — Brought to Life Digitally!',
                            1000,
                        ]}
                        wrapper="h1"
                        speed={50}
                        repeat={Infinity}
                    />
                    <p>
                        Custom VTuber models, emotes, logos, and stream art made just for you.
                        Whether you're building a brand or just starting out, I help you stand out with art that speaks your vibe.
                    </p>
                    <button>Let’s Work Together</button>
                </div>
            </Container>
        </div>
    )
}

export default Hero;