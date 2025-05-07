import React from 'react';
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

import ReferenceSheet1 from "../../Assets/ReferenceSheet/character1.png";
import ReferenceSheet2 from "../../Assets/ReferenceSheet/character2.png";
import ReferenceSheet3 from "../../Assets/ReferenceSheet/character3.png";
import ReferenceSheet4 from "../../Assets/ReferenceSheet/character4.png";
import ReferenceSheet5 from "../../Assets/ReferenceSheet/character5.png";
import ReferenceSheet6 from "../../Assets/ReferenceSheet/character6.png";
import ReferenceSheet7 from "../../Assets/ReferenceSheet/character7.png";
import ReferenceSheet8 from "../../Assets/ReferenceSheet/character8.png";
import ReferenceSheet9 from "../../Assets/ReferenceSheet/character9.png";
import ReferenceSheet10 from "../../Assets/ReferenceSheet/character10.png";
import ReferenceSheet11 from "../../Assets/ReferenceSheet/character11.png";
import ReferenceSheet12 from "../../Assets/ReferenceSheet/character12.png";
import ReferenceSheet13 from "../../Assets/ReferenceSheet/character13.png";
import ReferenceSheet14 from "../../Assets/ReferenceSheet/character14.png";

const dataRefernce = {
    landscape: [
        ReferenceSheet1, ReferenceSheet2, ReferenceSheet3,
        ReferenceSheet4, ReferenceSheet5,
        ReferenceSheet6, ReferenceSheet7,
        ReferenceSheet9, ReferenceSheet11, ReferenceSheet12,
        ReferenceSheet13
    ],
    portrait: [
        ReferenceSheet8, ReferenceSheet10, ReferenceSheet14
    ],
};

const ReferenceSheet = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='referenceSheets'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600} >
                    Reference Sheets
                </p>
                <SvgComponent />
            </h1>
            <Container className="img-container">
                {
                    dataRefernce && dataRefernce.portrait.map((value, key) => (
                        <div data-aos="zoom-in" className='character-art-portrait' key={key + 'reference-portrait'}>
                            <Image
                                width={windowWidth < 430 ? 250 : 300}
                                height={windowWidth < 430 ? 300 : 400}
                                src={value}
                                alt="Image"
                            />
                        </div>
                    ))
                }
                {
                    dataRefernce && dataRefernce.landscape.map((value, key) => (
                        <div data-aos="zoom-in" className='character-art-landscape' key={key + 'reference-lanscape'}>
                            <Image
                                width={windowWidth < 430 ? 350 : 450}
                                height={windowWidth < 430 ? 250 : 300}
                                src={value}
                                alt="Image"
                            />
                        </div>
                    ))
                }
            </Container>
        </div >
    )
}

export default ReferenceSheet