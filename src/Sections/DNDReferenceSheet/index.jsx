import React from 'react';
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

import set1img1DND from "../../Assets/DNDReferenceSheet/set1img1.png";
import set1img2DND from "../../Assets/DNDReferenceSheet/set1img2.png";
import set1img3DND from "../../Assets/DNDReferenceSheet/set1img3.png";
import set1img4DND from "../../Assets/DNDReferenceSheet/set1img4.png";


const dataDND = {
    set1: [set1img1DND, set1img2DND, set1img3DND, set1img4DND],
};

const DNDReferenceSheet = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='dndReferenceSheet'>
            <h1 id='dnd'>
                <p data-aos="fade-right" data-aos-duration={600} >
                    DND Reference Sheet
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

export default DNDReferenceSheet;