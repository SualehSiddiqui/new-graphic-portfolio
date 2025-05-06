import React from 'react';
import "./style.css";
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

// Set1 - video
import logo1Video from '../../Assets/LogoAndBanner/character1img1.mp4';
import banner1Video from '../../Assets/LogoAndBanner/character1img2.mp4';

// Set2 - image
import logo2 from '../../Assets/LogoAndBanner/character2img1.png';
import banner2 from '../../Assets/LogoAndBanner/character2img2.png';

import banner3 from '../../Assets/LogoAndBanner/character3img1.png';
import banner4 from '../../Assets/LogoAndBanner/character4img1.png';
import banner9 from '../../Assets/LogoAndBanner/character9img1.png';

import logo5 from '../../Assets/LogoAndBanner/character5img1.png';
import logo6 from '../../Assets/LogoAndBanner/character6img1.png';
import logo7 from '../../Assets/LogoAndBanner/character7img1.png';
import logo8 from '../../Assets/LogoAndBanner/character8img1.png';

const dataLogoBanner = {
  set1: {
    logo: { video: logo1Video },
    banner: { video: banner1Video },
  },
  set2: {
    logo: { image: logo2 },
    banner: { image: banner2 },
  },
  set3: {
    banner: { image: banner3 },
  },
  set4: {
    banner: { image: banner4 },
  },
  set5: {
    logo: { image: logo5 },
  },
  set6: {
    logo: { image: logo6 },
  },
  set7: {
    logo: { image: logo7 },
  },
  set8: {
    logo: { image: logo8 },
  },
  set9: {
    banner: { image: banner9 },
  },
};

const LogoAndBanner = ({ windowWidth }) => {
  return (
    <div className="main-img-div" id='logoAndBanner'>
      <h1>
        <p data-aos="fade-right" data-aos-duration={600} >
          Logo and Banner
        </p>
        <SvgComponent />
      </h1>
      <Container className="img-container">
        {
          dataLogoBanner && Object.entries(dataLogoBanner).map(([key, value]) => {
            return (
              <>
                {
                  value.logo && value.logo.image &&
                  <div className="logo-img-div" key={value.logo.image}>
                    <Image
                      src={value.logo.image}
                      alt="Images"
                      width={300}
                      height={300}
                    />
                  </div>
                }
                {
                  value.logo && value.logo.video &&
                  <div className="logo-img-div" key={value.logo.video}>
                    <video
                      width={300}
                      height={300}
                      muted
                      autoPlay
                      loop
                      style={{ objectFit: 'cover' }}
                    >
                      <source style={{ width: '100%', height: '100%' }} src={value.logo.video} type="video/mp4" />
                    </video>
                  </div>
                }
                {
                  value.banner && value.banner.image &&
                  <div className="twitch-img-div" key={value.banner.image}>
                    <Image
                      src={value.banner.image}
                      alt="Images"
                      width={windowWidth < 430 ? 300 : 400}
                      height={200}
                    />
                  </div>
                }
                {
                  value.banner && value.banner.video &&
                  <div className="twitch-img-div" key={value.banner.video}>
                    <video
                      width={windowWidth < 430 ? 300 : 400}
                      height={200}
                      muted
                      autoPlay
                      loop
                      style={{ objectFit: 'cover' }}
                    >
                      <source style={{ width: '100%', height: '100%' }} src={value.banner.video} type="video/mp4" />
                    </video>
                  </div>
                }
              </>
            )
          })
        }
      </Container>
    </div>
  )
}

export default LogoAndBanner