import React from 'react';
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

import VRCharacter1 from "../../Assets/VRWorld/character1.png";
import VRCharacter2 from "../../Assets/VRWorld/character2.png";
import VRCharacter3 from "../../Assets/VRWorld/character3.png";
import VRCharacter4 from "../../Assets/VRWorld/character4.png";
import VRCharacter5 from "../../Assets/VRWorld/character5.png";
import VRCharacter6 from "../../Assets/VRWorld/character6.png";
import VRCharacter7 from "../../Assets/VRWorld/character7.png";

const dataVR = {
    images: [
        VRCharacter1, VRCharacter2, VRCharacter3, VRCharacter4, VRCharacter5,
        VRCharacter6, VRCharacter7
    ]
};

const VrWorld = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='vrWorld'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600} >
                    VR World
                </p>
                <SvgComponent />
            </h1>
            <Container className="img-container">
                {
                    dataVR && dataVR.images.map((v, i) => (
                        <div data-aos="zoom-in" className="art-room-div" key={i}>
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