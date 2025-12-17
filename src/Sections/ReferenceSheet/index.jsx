import React, { useEffect, useState } from 'react';
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
import ReferenceSheet15 from "../../Assets/ReferenceSheet/character15.png";
import ReferenceSheet16 from "../../Assets/ReferenceSheet/character16.png";
import ReferenceSheet17 from "../../Assets/ReferenceSheet/character17.png";
import ReferenceSheet18 from "../../Assets/ReferenceSheet/character18.png";
import ReferenceSheet19 from "../../Assets/ReferenceSheet/character19.png";

const dataReference = {
    landscape: [
        ReferenceSheet17, ReferenceSheet18, ReferenceSheet19,
        ReferenceSheet1, ReferenceSheet2, ReferenceSheet3,
        ReferenceSheet4, ReferenceSheet5,
        ReferenceSheet6, ReferenceSheet7,
        ReferenceSheet9, ReferenceSheet11, ReferenceSheet12,
        ReferenceSheet13, ReferenceSheet15, ReferenceSheet16,
    ],
    portrait: [ReferenceSheet8, ReferenceSheet10, ReferenceSheet14],
};

const RenderImages = ({ title, data, count, setCount, windowWidth, type, increaseBy }) => (
    <>
        <h2 data-aos="fade-left" data-aos-duration={600}>{title}</h2>

        <Container className="img-container">
            {data.slice(0, count).map((src, index) => (
                <div
                    data-aos="zoom-in"
                    className={type === "landscape" ? "character-art-landscape" : "character-art-portrait"}
                    key={`${title}-${index}`}
                >
                    <Image
                        src={src}
                        alt={`${title} reference`}
                        width={type === "landscape" ? 300 : 200}
                        height={type === "landscape" ? 200 : (windowWidth < 430 ? 250 : 300)}
                    />
                </div>
            ))}
        </Container>

        {data.length > increaseBy && (
            <div className="load-more-btn-wrapper">
                {count < data.length ? (
                    <button className="load-more-btn" onClick={() => setCount(count + increaseBy)}>
                        Load More
                    </button>
                ) : (
                    <button className="load-more-btn" onClick={() => setCount(increaseBy)}>
                        Show Less
                    </button>
                )}
            </div>
        )}
    </>
);

const ReferenceSheet = ({ windowWidth }) => {
    // Responsive load amount
    const [increaseBy, setIncreaseBy] = useState(windowWidth <= 430 ? 6 : 10);

    useEffect(() => {
        setIncreaseBy(windowWidth <= 430 ? 6 : 10);
    }, [windowWidth]);

    const [landscapeCount, setLandscapeCount] = useState(increaseBy);
    const [portraitCount, setPortraitCount] = useState(increaseBy);

    return (
        <div className="main-img-div" id='referenceSheets'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600}>Reference Sheets</p>
                <SvgComponent />
            </h1>

            <RenderImages
                title="Landscape"
                data={dataReference.landscape}
                count={landscapeCount}
                setCount={setLandscapeCount}
                windowWidth={windowWidth}
                type="landscape"
                increaseBy={increaseBy}
            />

            <div className='division-line'></div>

            <RenderImages
                title="Portrait"
                data={dataReference.portrait}
                count={portraitCount}
                setCount={setPortraitCount}
                windowWidth={windowWidth}
                type="portrait"
                increaseBy={increaseBy}
            />
        </div>
    );
};

export default ReferenceSheet;