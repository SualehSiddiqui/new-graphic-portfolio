import React, { useState, useEffect } from 'react';
import "./style.css";
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

// ⬇️ Your same imports (don’t remove)
import overlay1 from '../../Assets/StreamPackage/set1img1.mp4';
import logo1 from '../../Assets/StreamPackage/set1img2.png';
import screen1 from '../../Assets/StreamPackage/set1img3.png';
import banner1 from '../../Assets/StreamPackage/set1img4.png';

import overlay2 from '../../Assets/StreamPackage/set2img1.mp4';
import logo2 from '../../Assets/StreamPackage/set2img2.png';
import screen2 from '../../Assets/StreamPackage/set2img3.png';
import banner2 from '../../Assets/StreamPackage/set2img4.png';

import logo3 from '../../Assets/StreamPackage/set3img1.png';

import overlay4 from '../../Assets/StreamPackage/set4img1.png';
import overlay5 from '../../Assets/StreamPackage/set5img1.png';
import overlay6 from '../../Assets/StreamPackage/set6img1.png';
import overlay7 from '../../Assets/StreamPackage/set7img1.png';
import overlay8 from '../../Assets/StreamPackage/set8img1.png';
import overlay9 from '../../Assets/StreamPackage/set9img1.png';
import overlay10 from '../../Assets/StreamPackage/set10img1.png';
import overlay11 from '../../Assets/StreamPackage/set11img1.png';
import overlay12 from '../../Assets/StreamPackage/set12img1.mp4';
import overlay13 from '../../Assets/StreamPackage/set13img1.mp4';
import overlay14 from '../../Assets/StreamPackage/set14img1.mp4';
import overlay15 from '../../Assets/StreamPackage/set15img1.mp4';
import overlay16 from '../../Assets/StreamPackage/set16img1.mp4';
import overlay17 from '../../Assets/StreamPackage/set17img1.png';
import overlay18 from '../../Assets/StreamPackage/set18img1.png';
import overlay19 from '../../Assets/StreamPackage/set19img1.png';
import overlay20 from '../../Assets/StreamPackage/set20img1.png';
import overlay21 from '../../Assets/StreamPackage/set21img1.png';
import overlay22 from '../../Assets/StreamPackage/set22img1.mp4';
import overlay23 from '../../Assets/StreamPackage/set23img1.mp4';
import overlay24 from '../../Assets/StreamPackage/set24img1.mp4';
import overlay25 from '../../Assets/StreamPackage/set25img1.mp4';
import overlay26 from '../../Assets/StreamPackage/set26img1.mp4';
import overlay27 from '../../Assets/StreamPackage/set27img1.png';
import overlay28 from '../../Assets/StreamPackage/set28img1.png';
import overlay29 from '../../Assets/StreamPackage/set29img1.png';
import overlay30 from '../../Assets/StreamPackage/set30img1.png';
import overlay31 from '../../Assets/StreamPackage/set31img1.png';
import overlay32 from '../../Assets/StreamPackage/set32img1.png';

// ===================== DATA =====================
const dataStreamingPackage = {
  image: [
    overlay4, overlay5, overlay6, overlay7, overlay8, overlay9,
    overlay10, overlay11, overlay17, overlay18, overlay19, overlay20,
    overlay21, overlay27, overlay28, overlay29, overlay30, overlay31,
    overlay32
  ],
  video: [
    overlay12, overlay13, overlay14, overlay15, overlay16,
    overlay22, overlay23, overlay24, overlay25, overlay26,
  ],
};

const StreamingPackage = ({ windowWidth }) => {

  const [increaseBy, setIncreaseBy] = useState(windowWidth <= 430 ? 6 : 10);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const newVal = windowWidth <= 430 ? 6 : 10;
    setIncreaseBy(newVal);
    setVisibleCount(newVal);
  }, [windowWidth]);

  // 📌 Combine both image + video into a single sequence
  const allItems = [
    ...dataStreamingPackage.image.map(src => ({ type: "image", src })),
    ...dataStreamingPackage.video.map(src => ({ type: "video", src }))
  ];

  const itemsToShow = allItems.slice(0, visibleCount);

  return (
    <div className="main-img-div" id='streamingPackage'>
      <h1>
        <p data-aos="fade-right" data-aos-duration={600}>Streaming Package</p>
        <SvgComponent />
      </h1>

      <Container className="img-container">

        {/* ================= FIRST FIXED 3 SETS ================= */}
        <div data-aos="zoom-in" className="logo-img-div">
          <Image src={logo1} alt="Images" width={300} height={300} />
        </div>

        <div data-aos="zoom-in" className="character-art-landscape">
          <video width={300} height={200} muted autoPlay loop style={{ objectFit: 'cover' }}>
            <source src={overlay1} type="video/mp4" />
          </video>
        </div>

        <div data-aos="zoom-in" className='character-art-portrait'>
          <Image width={200} height={windowWidth < 430 ? 250 : 300} src={screen1} alt="Image" />
        </div>

        <div data-aos="zoom-in" className="character-art-landscape">
          <Image src={banner1} alt="Images" width={300} height={200} />
        </div>

        <div data-aos="zoom-in" className="logo-img-div">
          <Image src={logo2} alt="Images" width={300} height={300} />
        </div>

        <div data-aos="zoom-in" className="character-art-landscape">
          <video width={300} height={200} muted autoPlay loop style={{ objectFit: 'cover' }}>
            <source src={overlay2} type="video/mp4" />
          </video>
        </div>

        <div data-aos="zoom-in" className="character-art-landscape">
          <Image src={screen2} alt="Images" width={300} height={200} />
        </div>

        <div data-aos="zoom-in" className="character-art-landscape">
          <Image src={banner2} alt="Images" width={300} height={200} />
        </div>

        <div data-aos="zoom-in" className="logo-img-div">
          <Image src={logo3} alt="Images" width={300} height={300} />
        </div>

        {/* ================= LOAD MORE SECTION ================= */}
        {itemsToShow.map((item, index) =>
          item.type === "image" ? (
            <div data-aos="zoom-in" className="character-art-landscape" key={index}>
              <Image src={item.src} alt="Images" width={300} height={200} />
            </div>
          ) : (
            <div data-aos="zoom-in" className="character-art-landscape" key={index}>
              <video width={300} height={200} muted autoPlay loop style={{ objectFit: 'cover' }}>
                <source src={item.src} type="video/mp4" />
              </video>
            </div>
          )
        )}

        {/* 📌 LOAD MORE BUTTON */}
        <div className="load-more-btn-wrapper">
          {visibleCount < allItems.length ? (
            <button className="load-more-btn" onClick={() => setVisibleCount(prev => prev + increaseBy)}>Load More</button>
          ) : (
            <button className="load-more-btn" onClick={() => setVisibleCount(0)}>Show Less</button>
          )}
        </div>

      </Container>
    </div>
  );
};

export default StreamingPackage;
