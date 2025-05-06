import React from 'react';
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

import set1img1DND from "../../Assets/DND/set1img1.png";
import set1img2DND from "../../Assets/DND/set1img2.png";
import set2img1DND from "../../Assets/DND/set2img1.png";
import set2img2DND from "../../Assets/DND/set2img2.png";
import set3img1DND from "../../Assets/DND/set3img1.png";
import set3img2DND from "../../Assets/DND/set3img2.png";
import set4img1DND from "../../Assets/DND/set4img1.png";
import set4img2DND from "../../Assets/DND/set4img2.png";
import set5img1DND from "../../Assets/DND/set5img1.png";

const dataDND = {
    set1: [set1img1DND, set1img2DND],
    set2: [set2img1DND, set2img2DND],
    set3: [set3img1DND, set3img2DND],
    set4: [set4img1DND, set4img2DND],
    set5: [set5img1DND],
};

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
                        return value.map(imageUrl => (
                            <div className='character-art-portrait' key={key}>
                                <Image
                                    width={windowWidth < 430 ? 250 : 300}
                                    height={windowWidth < 430 ? 300 : 400}
                                    src={imageUrl}
                                    alt="Image"
                                />
                            </div>
                        ))
                    })
                }
            </Container>
        </div>
    )
}

export default DND