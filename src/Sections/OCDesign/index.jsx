import React from 'react';
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

import character1 from "../../Assets/OCDesign/character1.png";
import character2 from "../../Assets/OCDesign/character2.png";
import character3 from "../../Assets/OCDesign/character3.png";
import character4 from "../../Assets/OCDesign/character4.png";
import character5 from "../../Assets/OCDesign/character5.png";
import character6 from "../../Assets/OCDesign/character6.png";
import character7 from "../../Assets/OCDesign/character7.png";
import character8 from "../../Assets/OCDesign/character8.png";
import character9 from "../../Assets/OCDesign/character9.png";
import character10 from "../../Assets/OCDesign/character10.png";

const dataOCDesign = [
    character1, character2, character3, character4, character5,
    character6, character7, character8, character9, character10,
];

const OCDesign = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='ocDesign'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600} >
                    OC Design
                </p>
                <SvgComponent />
            </h1>
            <Container className="img-container">
                {
                    dataOCDesign && dataOCDesign.map((value, key) => {
                        return (
                            <>
                                <div data-aos="zoom-in" className='character-art-portrait' key={key + 'portrait'}>
                                    <Image
                                        width={windowWidth < 430 ? 200 : 200}
                                        height={windowWidth < 430 ? 250 : 300}
                                        src={value}
                                        alt="Image"
                                    />
                                </div>
                            </>
                        )
                    })
                }
            </Container>
        </div >
    )
}

export default OCDesign;