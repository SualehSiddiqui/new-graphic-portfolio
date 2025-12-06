import React, { useEffect, useState } from 'react';
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

import set3img1DND from "../../Assets/PrintableModel/set3img1.png";
import set3img2DND from "../../Assets/PrintableModel/set3img2.png";

import set4img1DND from "../../Assets/PrintableModel/set4img1.png";
import set4img2DND from "../../Assets/PrintableModel/set4img2.png";
import set4img3DND from "../../Assets/PrintableModel/set4img3.png";
import set4img4DND from "../../Assets/PrintableModel/set4img4.png";

import set5img1DND from "../../Assets/PrintableModel/set5img1.png";
import set5img2DND from "../../Assets/PrintableModel/set5img2.png";
import set5img3DND from "../../Assets/PrintableModel/set5img3.png";
import set5img4DND from "../../Assets/PrintableModel/set5img4.png";
import set5img5DND from "../../Assets/PrintableModel/set5img5.png";
import set5img6DND from "../../Assets/PrintableModel/set5img6.png";
import set5img7DND from "../../Assets/PrintableModel/set5img7.png";

import set6img1DND from "../../Assets/PrintableModel/set6img1.png";
import set6img2DND from "../../Assets/PrintableModel/set6img2.png";
import set6img3DND from "../../Assets/PrintableModel/set6img3.png";
import set6img4DND from "../../Assets/PrintableModel/set6img4.png";
import set6img5DND from "../../Assets/PrintableModel/set6img5.png";
import set6img6DND from "../../Assets/PrintableModel/set6img6.png";

import set7img1DND from "../../Assets/PrintableModel/set7img1.png";

const dataDND = {
    set1: {
        portrait: { image: [set1img1DND, set1img2DND, set1img3DND, set1img4DND, set1img5DND, set1img6DND], video: [] },
        landscape: { image: [], video: [] }
    },
    set2: {
        portrait: { image: [set2img1DND, set2img3DND, set2img2DND, set2img4DND, set2img5DND, set2img6DND], video: [] },
        landscape: { image: [], video: [set2vid7DND] }
    },
    set3: {
        portrait: { image: [set3img1DND, set3img2DND], video: [] },
        landscape: { image: [], video: [] }
    },
    set4: {
        portrait: { image: [], video: [] },
        landscape: { image: [set4img1DND, set4img2DND, set4img3DND, set4img4DND], video: [] }
    },
    set5: {
        portrait: { image: [], video: [] },
        landscape: { image: [set5img1DND, set5img3DND, set5img2DND, set5img4DND, set5img5DND, set5img6DND, set5img7DND], video: [] }
    },
    set6: {
        portrait: { image: [], video: [] },
        landscape: { image: [set6img1DND, set6img3DND, set6img2DND, set6img4DND, set6img5DND, set6img6DND], video: [] }
    },
    set7: {
        portrait: { image: [], video: [] },
        landscape: { image: [set7img1DND], video: [] }
    },
};

const PrintableModel = ({ windowWidth }) => {

    const [increaseBy, setIncreaseBy] = useState(windowWidth <= 430 ? 6 : 10);
    const [visibleCount, setVisibleCount] = useState(increaseBy);

    useEffect(() => {
        const newInc = windowWidth <= 430 ? 6 : 10;
        setIncreaseBy(newInc);
        setVisibleCount(newInc);
    }, [windowWidth]);

    // ========== Collect ALL items in required sequence ==========
    const orderedItems = [];
    Object.values(dataDND).forEach(set => {
        ["portrait", "landscape"].forEach(type => {
            ["image", "video"].forEach(media => {
                set[type][media].forEach(src => {
                    orderedItems.push({
                        type,
                        media,
                        src
                    });
                });
            });
        });
    });

    const itemsToShow = orderedItems.slice(0, visibleCount);

    return (
        <div className="main-img-div" id='printableModel'>
            <h1 id='dnd'>
                <p data-aos="fade-right" data-aos-duration={600}>Printable Model</p>
                <SvgComponent />
            </h1>

            <Container className="img-container">

                {itemsToShow.map((item, index) => (
                    item.media === "image" ? (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            className={item.type === "portrait" ? "character-art-portrait" : "character-art-landscape"}
                        >
                            <Image
                                src={item.src}
                                alt="IMG"
                                width={item.type === "portrait" ? 200 : windowWidth < 430 ? 300 : 350}
                                height={item.type === "portrait" ? (windowWidth < 430 ? 250 : 300) : 200}
                            />
                        </div>
                    ) : (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            className={item.type === "portrait" ? "character-art-portrait" : "character-art-landscape"}
                        >
                            <video
                                width={item.type === "portrait" ? (windowWidth < 430 ? 300 : 400) : (windowWidth < 430 ? 300 : 350)}
                                height={200}
                                muted autoPlay loop style={{ objectFit: 'cover' }}
                            >
                                <source src={item.src} type="video/mp4" />
                            </video>
                        </div>
                    )
                ))}

                {/* 📌 LOAD MORE BUTTON */}
                <div className="load-more-btn-wrapper">
                    {visibleCount < orderedItems.length ? (
                        <button className="load-more-btn" onClick={() => setVisibleCount(prev => prev + increaseBy)}>
                            Load More
                        </button>
                    ) : (
                        <button className="load-more-btn" onClick={() => setVisibleCount(increaseBy)}>
                            Show Less
                        </button>
                    )}
                </div>

            </Container>
        </div>
    );
};

export default PrintableModel;