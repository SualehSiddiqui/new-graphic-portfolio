import React from 'react';
import "./style.css";
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

// Twitch images
import twitchImg1 from '../../Assets/Twitch/character1img1.png';
import twitchImg2 from '../../Assets/Twitch/character2img1.png';
import twitchImg3 from '../../Assets/Twitch/character3img1.png';
import twitchImg4 from '../../Assets/Twitch/character4img1.png';
import twitchImg5 from '../../Assets/Twitch/character5img1.png';

// Twitch videos
import twitchVid1 from '../../Assets/Twitch/character6img1.mp4';
import twitchVid2 from '../../Assets/Twitch/character7img1.mp4';
import twitchVid3 from '../../Assets/Twitch/character8img1.mp4';
import twitchVid4 from '../../Assets/Twitch/character9img1.mp4';
import twitchVid5 from '../../Assets/Twitch/character10img1.mp4';

const dataTwitch = {
    images: [twitchImg1, twitchImg2, twitchImg3, twitchImg4, twitchImg5],
    video: [twitchVid1, twitchVid2, twitchVid3, twitchVid4, twitchVid5],
};

const Twitch = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='twitch' >
            <h1>
                <p data-aos="fade-right" data-aos-duration={600} >
                    Twitch
                </p>
                <SvgComponent />
            </h1>
            <Container className="img-container">
                {
                    dataTwitch && dataTwitch.images.map((v, i) => (
                        <div className="twitch-img-div" key={i + 'twitch-img'}>
                            <Image
                                src={v}
                                alt="Images"
                                width={windowWidth < 430 ? 300 : 400}
                                height={200}
                            />
                        </div>
                    ))
                }
                {
                    dataTwitch && dataTwitch.video.map((v, i) => {
                        return (
                            <div className="twitch-img-div" key={i + 'twitch-video'}>
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
            </Container>
        </div>
    )
}

export default Twitch