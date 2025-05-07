import React from 'react';
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

import set1img1DND from "../../Assets/DNDGroupArtWork/set1img1.png";
import set1img2DND from "../../Assets/DNDGroupArtWork/set1img2.png";
import set2img1DND from "../../Assets/DNDGroupArtWork/set2img1.png";
import set2img2DND from "../../Assets/DNDGroupArtWork/set2img2.png";
import set3img1DND from "../../Assets/DNDGroupArtWork/set3img1.png";
import set3img2DND from "../../Assets/DNDGroupArtWork/set3img2.png";

const dataDND = {
    set1: [set1img1DND, set1img2DND],
    set2: [set2img1DND, set2img2DND],
    set3: [set3img1DND, set3img2DND],
};

const DNDGroupArtWork = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='dndGroupArtWork'>
            <h1 id='dnd'>
                <p data-aos="fade-right" data-aos-duration={600} >
                    DND Group Art Work
                </p>
                <SvgComponent />
            </h1>
            <Container className="img-container">
                {
                    dataDND && Object.entries(dataDND).map(([key, value]) => {
                        return value.map(imageUrl => (
                            <div data-aos="zoom-in" className='character-art-landscape' key={key}>
                                <Image
                                    width={windowWidth < 430 ? 350 : 450}
                                    height={windowWidth < 430 ? 300 : 300}
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

export default DNDGroupArtWork;