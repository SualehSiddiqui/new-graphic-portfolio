import React from 'react';
import "./style.css";
import { Container } from "react-bootstrap";
import { Carousel } from 'antd';
import { Image } from 'antd';
import { SvgComponent } from "../Components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//Furry Character
import furryCharacter1img1 from "../Assets/3dModel/Furry/character1img1.png";
import furryCharacter1img2 from "../Assets/3dModel/Furry/character1img2.png";
import furryCharacter2img1 from "../Assets/3dModel/Furry/character2img1.png";
import furryCharacter2img2 from "../Assets/3dModel/Furry/character2img2.png";
import furryCharacter3img1 from "../Assets/3dModel/Furry/character3img1.png";
import furryCharacter3img2 from "../Assets/3dModel/Furry/character3img2.png";
import furryCharacter4img1 from "../Assets/3dModel/Furry/character4img1.png";
import furryCharacter4img2 from "../Assets/3dModel/Furry/character4img2.png";
import furryCharacter4vid3 from "../Assets/3dModel/Furry/character4img3.mp4";
import furryCharacter5img1 from "../Assets/3dModel/Furry/character5img1.png";
import furryCharacter5img2 from "../Assets/3dModel/Furry/character5img2.png";
import furryCharacter5vid3 from "../Assets/3dModel/Furry/character5img3.mp4";
import furryCharacter6img1 from "../Assets/3dModel/Furry/character6img1.png";
import furryCharacter6img2 from "../Assets/3dModel/Furry/character6img2.png";
import furryCharacter6img3 from "../Assets/3dModel/Furry/character6img3.png";
import furryCharacter7img1 from "../Assets/3dModel/Furry/character7img1.png";
import furryCharacter7img2 from "../Assets/3dModel/Furry/character7img2.png";
import furryCharacter8img1 from "../Assets/3dModel/Furry/character8img1.png";
import furryCharacter8img2 from "../Assets/3dModel/Furry/character8img2.png";
import furryCharacter9img1 from "../Assets/3dModel/Furry/character9img1.png";
import furryCharacter9img2 from "../Assets/3dModel/Furry/character9img2.png";
import furryCharacter9img3 from "../Assets/3dModel/Furry/character9img3.png";
import furryCharacter9vid4 from "../Assets/3dModel/Furry/character9img4.mp4";
import furryCharacter10img1 from "../Assets/3dModel/Furry/character10img1.png";
import furryCharacter10img2 from "../Assets/3dModel/Furry/character10img2.png";
import furryCharacter10img3 from "../Assets/3dModel/Furry/character10img3.png";
import furryCharacter10vid4 from "../Assets/3dModel/Furry/character10img4.mp4";
import furryCharacter11img1 from "../Assets/3dModel/Furry/character11img1.png";
import furryCharacter11img2 from "../Assets/3dModel/Furry/character11img2.png";
import furryCharacter11img3 from "../Assets/3dModel/Furry/character11img3.png";
import furryCharacter11vid4 from "../Assets/3dModel/Furry/character11img4.mp4";

// Human Characters
import humanCharacter1img1 from "../Assets/3dModel/Human/character1img1.png";
import humanCharacter1img2 from "../Assets/3dModel/Human/character1img2.png";
import humanCharacter2img1 from "../Assets/3dModel/Human/character2img1.png";
import humanCharacter2img2 from "../Assets/3dModel/Human/character2img2.png";
import humanCharacter3img1 from "../Assets/3dModel/Human/character3img1.png";
import humanCharacter3img2 from "../Assets/3dModel/Human/character3img2.png";
import humanCharacter4img1 from "../Assets/3dModel/Human/character4img1.png";
import humanCharacter4img2 from "../Assets/3dModel/Human/character4img2.png";
import humanCharacter5img1 from "../Assets/3dModel/Human/character5img1.png";
import humanCharacter5img2 from "../Assets/3dModel/Human/character5img2.png";
import humanCharacter6img1 from "../Assets/3dModel/Human/character6img1.png";
import humanCharacter6img2 from "../Assets/3dModel/Human/character6img2.png";
import humanCharacter6img3 from "../Assets/3dModel/Human/character6img3.png";
import humanCharacter7img1 from "../Assets/3dModel/Human/character7img1.png";
import humanCharacter7img2 from "../Assets/3dModel/Human/character7img2.png";
import humanCharacter8img1 from "../Assets/3dModel/Human/character8img1.png";
import humanCharacter8img2 from "../Assets/3dModel/Human/character8img2.png";
import humanCharacter9img1 from "../Assets/3dModel/Human/character9img1.png";
import humanCharacter9img2 from "../Assets/3dModel/Human/character9img2.png";
import humanCharacter10img1 from "../Assets/3dModel/Human/character10img1.png";
import humanCharacter10img2 from "../Assets/3dModel/Human/character10img2.png";
import humanCharacter11img1 from "../Assets/3dModel/Human/character11img1.png";
import humanCharacter11img2 from "../Assets/3dModel/Human/character11img2.png";
import humanCharacter12img1 from "../Assets/3dModel/Human/character12img1.png";
import humanCharacter12img2 from "../Assets/3dModel/Human/character12img2.png";
import humanCharacter13img1 from "../Assets/3dModel/Human/character13img1.png";
import humanCharacter13img2 from "../Assets/3dModel/Human/character13img2.png";
import humanCharacter14img1 from "../Assets/3dModel/Human/character14img1.png";
import humanCharacter14img2 from "../Assets/3dModel/Human/character14img2.png";
import humanCharacter15img1 from "../Assets/3dModel/Human/character15img1.png";
import humanCharacter15Vid2 from "../Assets/3dModel/Human/character15img2.mp4";
import humanCharacter16img1 from "../Assets/3dModel/Human/character16img1.png";
import humanCharacter16img2 from "../Assets/3dModel/Human/character16img2.png";
import humanCharacter16img3 from "../Assets/3dModel/Human/character16img3.png";
import humanCharacter17img1 from "../Assets/3dModel/Human/character17img1.png";
import humanCharacter17Vid2 from "../Assets/3dModel/Human/character17img2.mp4";
import humanCharacter18img1 from "../Assets/3dModel/Human/character18img1.png";
import humanCharacter18img2 from "../Assets/3dModel/Human/character18img2.png";
import humanCharacter18img3 from "../Assets/3dModel/Human/character18img3.png";


const CustomPrevArrow = ({ onClick }) => (
    <div className="carousel-arrows left-arrow" onClick={onClick}>
        <IoIosArrowBack />
    </div>
);

const CustomNextArrow = ({ onClick }) => (
    <div className="carousel-arrows right-arrow" onClick={onClick}>
        <IoIosArrowForward />
    </div>
);

const Avatar = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='3dAvatar'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600} >
                    3D Avatar
                </p>
                <SvgComponent />
            </h1>
            <h2 data-aos="fade-left" data-aos-duration={600} >
                Human
            </h2>
            <Container className="img-container">
                {
                    data3d && Object.entries(data3d.human).map(([key, value]) => {
                        return (
                            <div className="img-div" key={key}>
                                <Carousel
                                    arrows
                                    prevArrow={<CustomPrevArrow />}
                                    nextArrow={<CustomNextArrow />}
                                    infinite={true}
                                    autoplay={true}
                                    effect={'scrollx'}
                                    // fade={true}
                                    autoplaySpeed={10000}
                                    className="main-carousel"
                                >
                                    {value && value.map((v, i) => {
                                        return (
                                            <div className='carousel-div' key={i}>
                                                <Image
                                                    width={windowWidth < 430 ? 300 : 350}
                                                    height={windowWidth < 430 ? 350 : 400}
                                                    src={v}
                                                    alt="Image"
                                                />
                                            </div>
                                        )
                                    })}
                                </Carousel>
                            </div>
                        )
                    })
                }
            </Container>
            <div className='division-line' ></div>
            <h2 data-aos="fade-left" data-aos-duration={600} >
                Furry
            </h2>
            <Container className="img-container">
                {
                    data3d && Object.entries(data3d.furry).map(([key, value]) => {
                        return (
                            <div className="img-div" key={key}>
                                <Carousel
                                    arrows
                                    prevArrow={<CustomPrevArrow />}
                                    nextArrow={<CustomNextArrow />}
                                    infinite={true}
                                    autoplay={true}
                                    fade={true}
                                    autoplaySpeed={10000}
                                    className="main-carousel"
                                >
                                    {
                                        value.map((v, i) => {
                                            if (v.video) {
                                                return (
                                                    <>
                                                        {
                                                            v.video.map((v, i) => {
                                                                return (
                                                                    <div className='carousel-div' key={i}>
                                                                        <video
                                                                            width={windowWidth < 430 ? 300 : 350}
                                                                            height={windowWidth < 430 ? 350 : 400}
                                                                            muted
                                                                            autoPlay
                                                                            loop
                                                                            style={{ objectFit: 'cover' }}
                                                                        >
                                                                            <source style={{ width: '100%', height: '100%' }} src={v} type="video/mp4" />
                                                                        </video>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                )
                                            } else {
                                                return (
                                                    <div className='carousel-div' key={i}>
                                                        <Image
                                                            width={windowWidth < 430 ? 300 : 350}
                                                            height={windowWidth < 430 ? 350 : 400}
                                                            src={v}
                                                            alt="Image"
                                                        />
                                                    </div>
                                                )
                                            }
                                        })}
                                </Carousel>
                            </div>
                        )
                    })
                }
            </Container>
        </div >
    )
}

export default Avatar;