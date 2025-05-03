import React from 'react';
import "./style.css";
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../Components";

import referenceSheet1 from "../Assets/ReferenceSheet/character1.png";
import referenceSheet2 from "../Assets/ReferenceSheet/character2.png";
import referenceSheet3 from "../Assets/ReferenceSheet/character3.png";
import referenceSheet4 from "../Assets/ReferenceSheet/character4.png";
import referenceSheet5 from "../Assets/ReferenceSheet/character5.png";
import referenceSheet6 from "../Assets/ReferenceSheet/character6.png";
import referenceSheet7 from "../Assets/ReferenceSheet/character7.png";
import referenceSheet8 from "../Assets/ReferenceSheet/character8.png";
import referenceSheet9 from "../Assets/ReferenceSheet/character9.png";
import referenceSheet10 from "../Assets/ReferenceSheet/character10.png";
import referenceSheet11 from "../Assets/ReferenceSheet/character11.png";
import referenceSheet12 from "../Assets/ReferenceSheet/character12.png";
import referenceSheet13 from "../Assets/ReferenceSheet/character13.png";
import referenceSheet14 from "../Assets/ReferenceSheet/character14.png";
import referenceSheet15 from "../Assets/ReferenceSheet/character15.png";
import referenceSheet16 from "../Assets/ReferenceSheet/character16.png";
import referenceSheet17 from "../Assets/ReferenceSheet/character17.png";

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
                    dataRefernce && dataRefernce.images.map((v, i) => (
                        <div className="reference-img-div" key={i}>
                            <Image
                                src={v}
                                alt="img"
                                width={300}
                                height={windowWidth < 430 ? 270 : 300}
                            />
                        </div>
                    ))
                }
            </Container>
        </div >
    )
}

export default ReferenceSheet