import React from 'react';
import "./style.css";
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

// Set1 - video
import overlay1 from '../../Assets/StreamPackage/set1img1.mp4';
import logo1 from '../../Assets/StreamPackage/set1img2.png';
import screen1 from '../../Assets/StreamPackage/set1img3.png';
import banner1 from '../../Assets/StreamPackage/set1img4.png';

// Set2 - video
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

const dataStreamingPackage = {
  image: [
    overlay4, overlay5, overlay6, overlay7, overlay8, overlay9,
    overlay10, overlay11,
  ],
  video: [
    overlay12, overlay13, overlay14, overlay15, overlay16
  ],
};

const StreamingPackage = ({ windowWidth }) => {
  return (
    <div className="main-img-div" id='streamingPackage'>
      <h1>
        <p data-aos="fade-right" data-aos-duration={600} >
          Streaming Package
        </p>
        <SvgComponent />
      </h1>
      <Container className="img-container">
        <div className="logo-img-div">
          <Image
            src={logo1}
            alt="Images"
            width={300}
            height={300}
          />
        </div>
        <div className="twitch-img-div">
          <video
            width={windowWidth < 430 ? 300 : 400}
            height={200}
            muted
            autoPlay
            loop
            style={{ objectFit: 'cover' }}
          >
            <source style={{ width: '100%', height: '100%' }} src={overlay1} type="video/mp4" />
          </video>
        </div>
        <div className='character-art-portrait'>
          <Image
            width={windowWidth < 430 ? 250 : 300}
            height={windowWidth < 430 ? 300 : 400}
            src={screen1}
            alt="Image"
          />
        </div>
        <div className="twitch-img-div">
          <Image
            src={banner1}
            alt="Images"
            width={windowWidth < 430 ? 300 : 400}
            height={200}
          />
        </div>

        <div className="logo-img-div">
          <Image
            src={logo2}
            alt="Images"
            width={300}
            height={300}
          />
        </div>
        <div className="twitch-img-div">
          <video
            width={windowWidth < 430 ? 300 : 400}
            height={200}
            muted
            autoPlay
            loop
            style={{ objectFit: 'cover' }}
          >
            <source style={{ width: '100%', height: '100%' }} src={overlay2} type="video/mp4" />
          </video>
        </div>
        <div className="twitch-img-div">
          <Image
            src={screen2}
            alt="Images"
            width={windowWidth < 430 ? 300 : 400}
            height={200}
          />
        </div>
        <div className="twitch-img-div">
          <Image
            src={banner2}
            alt="Images"
            width={windowWidth < 430 ? 300 : 400}
            height={200}
          />
        </div>

        <div className="logo-img-div">
          <Image
            src={logo3}
            alt="Images"
            width={300}
            height={300}
          />
        </div>
        {dataStreamingPackage.image.map(image => (
          <div className="twitch-img-div" key={image}>
            <Image
              src={image}
              alt="Images"
              width={windowWidth < 430 ? 300 : 400}
              height={200}
            />
          </div>
        ))}

        {dataStreamingPackage.video.map(video => (
          <div className="twitch-img-div" key={video}>
            <video
              width={windowWidth < 430 ? 300 : 400}
              height={200}
              muted
              autoPlay
              loop
              style={{ objectFit: 'cover' }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ))}

      </Container>
    </div>
  )
}

export default StreamingPackage;