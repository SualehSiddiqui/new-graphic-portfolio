import React from 'react';
import { Container } from "react-bootstrap";
import { Carousel } from 'antd';
import { Image } from 'antd';
import { SvgComponent } from "../../Components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//Furry Character
import Character1img1 from "../../Assets/2DVtuberModel/character1img1.png";
import Character1vid2 from "../../Assets/2DVtuberModel/character1img2.mp4";
import Character2img1 from "../../Assets/2DVtuberModel/character2img1.png";
import Character2vid2 from "../../Assets/2DVtuberModel/character2img2.mp4";
import Character3img1 from "../../Assets/2DVtuberModel/character3img1.png";
import Character3vid2 from "../../Assets/2DVtuberModel/character3img2.mp4";
import Character4vid1 from "../../Assets/2DVtuberModel/character4img1.mp4";
import Character5img1 from "../../Assets/2DVtuberModel/character5img1.png";
import Character5vid2 from "../../Assets/2DVtuberModel/character5img2.mp4";
import Character6vid1 from "../../Assets/2DVtuberModel/character6img1.mp4";

const data2d = {
    character1: [Character1img1, { video: [Character1vid2] }],
    character2: [Character2img1, { video: [Character2vid2] }],
    character3: [Character3img1, { video: [Character3vid2] }],
    character4: [{ video: [Character4vid1] }],
    character5: [Character5img1, { video: [Character5vid2] }],
    character6: [{ video: [Character6vid1] }],

};

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

const Avatar2d = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='2dVtuberModel'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600} >
                    2D Vtuber Model
                </p>
                <SvgComponent />
            </h1>
            <Container className="img-container">
                {
                    data2d && Object.entries(data2d).map(([key, value]) => {
                        return (
                            <div data-aos="zoom-in" className="img-div" key={key}>
                                <Carousel
                                    arrows
                                    prevArrow={value.length > 1 ? <CustomPrevArrow /> : <></>}
                                    nextArrow={value.length > 1 ? <CustomNextArrow /> : <></>}
                                    infinite={true}
                                    autoplay={true}
                                    effect={'scrollx'}
                                    // fade={true}
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

export default Avatar2d;