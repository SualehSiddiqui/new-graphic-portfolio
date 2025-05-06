import React from 'react';
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

// ArtRoom videos
import artVid1 from '../../Assets/ArtRoom/set1img1.mp4';
import artVid2 from '../../Assets/ArtRoom/set2img1.mp4';
import artVid4 from '../../Assets/ArtRoom/set4img1.mp4';
import artVid5 from '../../Assets/ArtRoom/set5img1.mp4';
import artVid6 from '../../Assets/ArtRoom/set6img1.mp4';
import artVid8 from '../../Assets/ArtRoom/set8img1.mp4';
import artVid9 from '../../Assets/ArtRoom/set9img1.mp4';

// ArtRoom images
import artImg3 from '../../Assets/ArtRoom/set3img1.png';
import artImg7 from '../../Assets/ArtRoom/set7img1.png';
import artImg10 from '../../Assets/ArtRoom/set10img1.png';
import artImg11 from '../../Assets/ArtRoom/set11img1.png';
import artImg12 from '../../Assets/ArtRoom/set12img1.png';
import artImg13 from '../../Assets/ArtRoom/set13img1.png';
import artImg14 from '../../Assets/ArtRoom/set14img1.png';
import artImg15 from '../../Assets/ArtRoom/set15img1.png';
import artImg16 from '../../Assets/ArtRoom/set16img1.png';
import artImg17 from '../../Assets/ArtRoom/set17img1.png';
import artImg18 from '../../Assets/ArtRoom/set18img1.png';
import artImg19 from '../../Assets/ArtRoom/set19img1.png';
import artImg20 from '../../Assets/ArtRoom/set20img1.png';
import artImg21 from '../../Assets/ArtRoom/set21img1.png';

const dataArtRoom = {
    set1: { video: [artVid1] },
    set2: { video: [artVid2] },
    set3: { image: [artImg3] },
    set4: { video: [artVid4] },
    set5: { video: [artVid5] },
    set6: { video: [artVid6] },
    set7: { image: [artImg7] },
    set8: { video: [artVid8] },
    set9: { video: [artVid9] },
    set10: { image: [artImg10] },
    set11: { image: [artImg11] },
    set12: { image: [artImg12] },
    set13: { image: [artImg13] },
    set14: { image: [artImg14] },
    set15: { image: [artImg15] },
    set16: { image: [artImg16] },
    set17: { image: [artImg17] },
    set18: { image: [artImg18] },
    set19: { image: [artImg19] },
    set20: { image: [artImg20] },
    set21: { image: [artImg21] },
};

const ArtRoom = ({ windowWidth }) => {

    return (
        <div className="main-img-div" id='artRoom'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600} >
                    Art Room
                </p>
                <SvgComponent />
            </h1>
            <Container className="img-container">
                {
                    dataArtRoom && Object.entries(dataArtRoom).map(([key, value]) => {
                        return (
                            <>
                                {
                                    value.image && value.image.map((v, i) => {
                                        return (
                                            <div className="twitch-img-div" key={i}>
                                                <Image
                                                    src={v}
                                                    alt="Images"
                                                    width={windowWidth < 430 ? 300 : 400}
                                                    height={200}
                                                />
                                            </div>
                                        )
                                    })
                                }
                                {
                                    value.video && value.video.map((v, i) => {
                                        return (
                                            <div className="twitch-img-div" key={i}>
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

export default ArtRoom