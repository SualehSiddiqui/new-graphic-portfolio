import React from 'react';
import "./style.css";
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../Components";

import set1img1DND from "../Assets/DND/set1img1.png";
import set2img1DND from "../Assets/DND/set2img1.png";
import set2img2DND from "../Assets/DND/set2img2.png";
import set3img1DND from "../Assets/DND/set3img1.png";
import set3img2DND from "../Assets/DND/set3img2.png";
import set4img1DND from "../Assets/DND/set4img1.png";
import set4img2DND from "../Assets/DND/set4img2.png";
import set5img1DND from "../Assets/DND/set5img1.png";
import set5img2DND from "../Assets/DND/set5img2.png";

const DND = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='dnd'>
            <h1 id='dnd'>
                <p data-aos="fade-right" data-aos-duration={600} >
                    DND
                </p>
                <SvgComponent />
            </h1>
            <Container className="img-container">
                {
                    dataDND && Object.entries(dataDND).map(([key, value]) => {
                        return (
                            <>
                                {
                                    value.image && value.image.map((v, i) => {
                                        return (
                                            <div className="dnd-img-div" key={i}>
                                                <Image
                                                    src={v}
                                                    alt="Images"
                                                    width={windowWidth < 430 ? 300 : 400}
                                                    height={windowWidth < 430 ? 350 : 500}
                                                />
                                            </div>
                                        )
                                    })
                                }
                                {
                                    value.video && value.video.map((v, i) => {
                                        return (
                                            <div className="img-div twitch-img-div dnd-img-div" key={i}>
                                                <video
                                                    width={windowWidth < 430 ? 300 : 400}
                                                    height={windowWidth < 430 ? 350 : 500}
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
                    })
                }
            </Container>
        </div>
    )
}

export default DND