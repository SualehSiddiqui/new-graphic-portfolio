import React, { useState } from 'react';
import "./style.css";
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

const dataArtRoom = [
    { type: "video", src: artVid1 },
    { type: "video", src: artVid2 },
    { type: "image", src: artImg3 },
    { type: "video", src: artVid4 },
    { type: "video", src: artVid5 },
    { type: "video", src: artVid6 },
    { type: "image", src: artImg7 },
    { type: "video", src: artVid8 },
    { type: "video", src: artVid9 },
    { type: "image", src: artImg10 },
    { type: "image", src: artImg11 },
    { type: "image", src: artImg12 },
    { type: "image", src: artImg13 },
    { type: "image", src: artImg14 },
    { type: "image", src: artImg15 },
    { type: "image", src: artImg16 },
    { type: "image", src: artImg17 },
    { type: "image", src: artImg18 },
    { type: "image", src: artImg19 },
    { type: "image", src: artImg20 },
    { type: "image", src: artImg21 },
];

const ArtRoom = ({ windowWidth }) => {

    const [visible, setVisible] = useState(6); // initially show 6
    const total = dataArtRoom.length;

    const loadMore = () => setVisible(prev => prev + 6);
    const showLess = () => setVisible(6);

    return (
        <div className="main-img-div" id='artRoom'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600}>
                    Art Room
                </p>
                <SvgComponent />
            </h1>

            <Container className="img-container">
                {dataArtRoom.slice(0, visible).map((item, i) => (
                    <div data-aos="zoom-in" className="character-art-landscape" key={i}>
                        {item.type === "image" ? (
                            <Image
                                src={item.src}
                                alt="ArtRoom IMG"
                                width={windowWidth < 430 ? 300 : 350}
                                height={200}
                            />
                        ) : (
                            <video
                                width={windowWidth < 430 ? 300 : 350}
                                height={200}
                                muted
                                autoPlay
                                loop
                                style={{ objectFit: "cover" }}
                            >
                                <source src={item.src} type="video/mp4" />
                            </video>
                        )}
                    </div>
                ))}
            </Container>

            <div className="load-more-btn-wrapper">
                {visible < total ? (
                    <button className="load-more-btn" onClick={loadMore}>
                        Load More
                    </button>
                ) : (
                    <button className="load-more-btn" onClick={showLess}>
                        Show Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default ArtRoom;
