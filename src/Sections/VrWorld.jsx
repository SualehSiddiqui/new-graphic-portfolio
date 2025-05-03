import React from 'react';
import "./style.css";
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../Components";

import vrCharacter1 from "../Assets/VRWorld/character1.png";
import vrCharacter2 from "../Assets/VRWorld/character2.png";
import vrCharacter3 from "../Assets/VRWorld/character3.png";
import vrCharacter4 from "../Assets/VRWorld/character4.png";
import vrCharacter5 from "../Assets/VRWorld/character5.png";
import vrCharacter6 from "../Assets/VRWorld/character6.png";
import vrCharacter7 from "../Assets/VRWorld/character7.png";

const VrWorld = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='vRWorld'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600} >
                    VR World
                </p>
                <SvgComponent />
            </h1>
            <Container className="img-container">
                {
                    dataVR && dataVR.images.map((v, i) => (
                        <div className="twitch-img-div" key={i}>
                            <Image
                                src={v}
                                alt="Images"
                                width={windowWidth < 430 ? 300 : 400}
                                height={200}
                            />
                        </div>
                    ))
                }
            </Container>
        </div>
    )
}

export default VrWorld