import React, { useState } from 'react';
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

    const [visible, setVisible] = useState(4); // initially show 4 images
    const total = dataVR.images.length;

    const handleLoadMore = () => {
        setVisible(prev => prev + 4); // load 4 more dynamically
    };

    const handleShowLess = () => {
        setVisible(4); // reset to 4
    };

    return (
        <div className="main-img-div" id='vrWorld'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600}>
                    VR World
                </p>
                <SvgComponent />
            </h1>

            <Container className="img-container">
                {
                    dataVR.images.slice(0, visible).map((v, i) => (
                        <div data-aos="zoom-in" className="character-art-landscape" key={i}>
                            <Image
                                src={v}
                                alt="Images"
                                width={windowWidth < 430 ? 300 : 350}
                                height={200}
                            />
                        </div>
                    ))
                }
            </Container>

            {/* Load More / Show Less Button */}
            <div className="load-more-btn-wrapper">
                {visible < total ? (
                    <button className="load-more-btn" onClick={handleLoadMore}>Load More</button>
                ) : (
                    <button className="load-more-btn" onClick={handleShowLess}>Show Less</button>
                )}
            </div>
        </div>
    )
}

export default VrWorld;
