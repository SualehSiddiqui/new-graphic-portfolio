import React from 'react';
import "./style.css"
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

import set1img1DND from "../../Assets/PrintableModel/set1img1.png";
import set1img2DND from "../../Assets/PrintableModel/set1img2.png";
import set1img3DND from "../../Assets/PrintableModel/set1img3.png";
import set1img4DND from "../../Assets/PrintableModel/set1img4.png";
import set1img5DND from "../../Assets/PrintableModel/set1img5.png";
import set1img6DND from "../../Assets/PrintableModel/set1img6.png";

import set2img1DND from "../../Assets/PrintableModel/set2img1.png";
import set2img2DND from "../../Assets/PrintableModel/set2img2.png";
import set2img3DND from "../../Assets/PrintableModel/set2img3.png";
import set2img4DND from "../../Assets/PrintableModel/set2img4.png";
import set2img5DND from "../../Assets/PrintableModel/set2img5.png";
import set2img6DND from "../../Assets/PrintableModel/set2img6.png";
import set2vid7DND from "../../Assets/PrintableModel/set2img7.mp4";


const dataDND = {
    set1: { image: [set1img1DND, set1img2DND, set1img3DND, set1img4DND, set1img5DND, set1img6DND] },
    set2: { image: [set2img1DND, set2img2DND, set2img3DND, set2img4DND, set2img5DND, set2img6DND], video: [set2vid7DND] },
};

const PrintableModel = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='printableModel'>
            <h1 id='dnd'>
                <p data-aos="fade-right" data-aos-duration={600} >
                    Printable Model
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
                                            <div className="character-art-portrait" key={i}>
                                                <Image
                                                    src={v}
                                                    alt="Images"
                                                    width={windowWidth < 430 ? 250 : 300}
                                                    height={windowWidth < 430 ? 300 : 400}
                                                />
                                            </div>
                                        )
                                    })
                                }
                                {
                                    value.video && value.video.map((v, i) => {
                                        return (
                                            <div className="printable-model-video" key={i}>
                                                <video
                                                    width={windowWidth < 430 ? 300 : 400}
                                                    height={200}
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

export default PrintableModel;