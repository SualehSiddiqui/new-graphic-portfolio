import React, { useEffect, useState } from "react";
import "./style.css";
import { Carousel } from 'antd';
import { Image } from 'antd';
import { SvgComponent } from "../../Components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Container, Button } from "react-bootstrap";

//Furry Character
import furryCharacter1img1 from "../../Assets/3DModel/Furry/character1img1.png";
import furryCharacter1img2 from "../../Assets/3DModel/Furry/character1img2.png";
import furryCharacter2img1 from "../../Assets/3DModel/Furry/character2img1.png";
import furryCharacter2img2 from "../../Assets/3DModel/Furry/character2img2.png";
import furryCharacter3img1 from "../../Assets/3DModel/Furry/character3img1.png";
import furryCharacter3img2 from "../../Assets/3DModel/Furry/character3img2.png";
import furryCharacter4img1 from "../../Assets/3DModel/Furry/character4img1.png";
import furryCharacter4img2 from "../../Assets/3DModel/Furry/character4img2.png";
import furryCharacter4vid3 from "../../Assets/3DModel/Furry/character4img3.mp4";
import furryCharacter5img1 from "../../Assets/3DModel/Furry/character5img1.png";
import furryCharacter5img2 from "../../Assets/3DModel/Furry/character5img2.png";
import furryCharacter5vid3 from "../../Assets/3DModel/Furry/character5img3.mp4";
import furryCharacter6img1 from "../../Assets/3DModel/Furry/character6img1.png";
import furryCharacter6img2 from "../../Assets/3DModel/Furry/character6img2.png";
import furryCharacter6img3 from "../../Assets/3DModel/Furry/character6img3.png";
import furryCharacter7img1 from "../../Assets/3DModel/Furry/character7img1.png";
import furryCharacter7img2 from "../../Assets/3DModel/Furry/character7img2.png";
import furryCharacter8img1 from "../../Assets/3DModel/Furry/character8img1.png";
import furryCharacter8img2 from "../../Assets/3DModel/Furry/character8img2.png";
import furryCharacter9img1 from "../../Assets/3DModel/Furry/character9img1.png";
import furryCharacter9img2 from "../../Assets/3DModel/Furry/character9img2.png";
import furryCharacter9img3 from "../../Assets/3DModel/Furry/character9img3.png";
import furryCharacter9vid4 from "../../Assets/3DModel/Furry/character9img4.mp4";
import furryCharacter10img1 from "../../Assets/3DModel/Furry/character10img1.png";
import furryCharacter10img2 from "../../Assets/3DModel/Furry/character10img2.png";
import furryCharacter10img3 from "../../Assets/3DModel/Furry/character10img3.png";
import furryCharacter10vid4 from "../../Assets/3DModel/Furry/character10img4.mp4";
import furryCharacter11img1 from "../../Assets/3DModel/Furry/character11img1.png";
import furryCharacter11img2 from "../../Assets/3DModel/Furry/character11img2.png";
import furryCharacter11img3 from "../../Assets/3DModel/Furry/character11img3.png";
import furryCharacter11vid4 from "../../Assets/3DModel/Furry/character11img4.mp4";

// Human Characters
import humanCharacter1img1 from "../../Assets/3DModel/Human/character1img1.png";
import humanCharacter1img2 from "../../Assets/3DModel/Human/character1img2.png";
import humanCharacter2img1 from "../../Assets/3DModel/Human/character2img1.png";
import humanCharacter2img2 from "../../Assets/3DModel/Human/character2img2.png";
import humanCharacter3img1 from "../../Assets/3DModel/Human/character3img1.png";
import humanCharacter3img2 from "../../Assets/3DModel/Human/character3img2.png";
import humanCharacter4img1 from "../../Assets/3DModel/Human/character4img1.png";
import humanCharacter4img2 from "../../Assets/3DModel/Human/character4img2.png";
import humanCharacter5img1 from "../../Assets/3DModel/Human/character5img1.png";
import humanCharacter5img2 from "../../Assets/3DModel/Human/character5img2.png";
import humanCharacter6img1 from "../../Assets/3DModel/Human/character6img1.png";
import humanCharacter6img2 from "../../Assets/3DModel/Human/character6img2.png";
import humanCharacter6img3 from "../../Assets/3DModel/Human/character6img3.png";
import humanCharacter7img1 from "../../Assets/3DModel/Human/character7img1.png";
import humanCharacter7img2 from "../../Assets/3DModel/Human/character7img2.png";
import humanCharacter8img1 from "../../Assets/3DModel/Human/character8img1.png";
import humanCharacter8img2 from "../../Assets/3DModel/Human/character8img2.png";
import humanCharacter9img1 from "../../Assets/3DModel/Human/character9img1.png";
import humanCharacter9img2 from "../../Assets/3DModel/Human/character9img2.png";
import humanCharacter11img1 from "../../Assets/3DModel/Human/character11img1.png";
import humanCharacter11img2 from "../../Assets/3DModel/Human/character11img2.png";
import humanCharacter12img1 from "../../Assets/3DModel/Human/character12img1.png";
import humanCharacter12img2 from "../../Assets/3DModel/Human/character12img2.png";
import humanCharacter13img1 from "../../Assets/3DModel/Human/character13img1.png";
import humanCharacter13img2 from "../../Assets/3DModel/Human/character13img2.png";
import humanCharacter14img1 from "../../Assets/3DModel/Human/character14img1.png";
import humanCharacter14img2 from "../../Assets/3DModel/Human/character14img2.png";
import humanCharacter15img1 from "../../Assets/3DModel/Human/character15img1.png";
import humanCharacter15vid2 from "../../Assets/3DModel/Human/character15img2.mp4";
import humanCharacter16img1 from "../../Assets/3DModel/Human/character16img1.png";
import humanCharacter16img2 from "../../Assets/3DModel/Human/character16img2.png";
import humanCharacter16img3 from "../../Assets/3DModel/Human/character16img3.png";
import humanCharacter17img1 from "../../Assets/3DModel/Human/character17img1.png";
import humanCharacter17vid2 from "../../Assets/3DModel/Human/character17img2.mp4";
import humanCharacter18img1 from "../../Assets/3DModel/Human/character18img1.png";
import humanCharacter18img2 from "../../Assets/3DModel/Human/character18img2.png";
import humanCharacter18img3 from "../../Assets/3DModel/Human/character18img3.png";
import humanCharacter19img1 from "../../Assets/3DModel/Human/character19img1.png";
import humanCharacter19img2 from "../../Assets/3DModel/Human/character19img2.png";
import humanCharacter19img3 from "../../Assets/3DModel/Human/character19img3.png";
import humanCharacter19vid1 from "../../Assets/3DModel/Human/character19img4.mp4";
import humanCharacter20img1 from "../../Assets/3DModel/Human/character20img1.png";
import humanCharacter20img2 from "../../Assets/3DModel/Human/character20img2.png";
import humanCharacter20img3 from "../../Assets/3DModel/Human/character20img3.png";
import humanCharacter20vid1 from "../../Assets/3DModel/Human/character20img4.mp4";
import humanCharacter21img1 from "../../Assets/3DModel/Human/character21img1.png";
import humanCharacter21img2 from "../../Assets/3DModel/Human/character21img2.png";
import humanCharacter21img3 from "../../Assets/3DModel/Human/character21img3.png";
import humanCharacter22img1 from "../../Assets/3DModel/Human/character22img1.png";
import humanCharacter22img2 from "../../Assets/3DModel/Human/character22img2.png";
import humanCharacter22img3 from "../../Assets/3DModel/Human/character22img3.png";

const data3d = {
    furry: {
        character1: [furryCharacter1img1, furryCharacter1img2],
        character2: [furryCharacter2img1, furryCharacter2img2],
        character3: [furryCharacter3img1, furryCharacter3img2],
        character4: [furryCharacter4img1, furryCharacter4img2, { video: [furryCharacter4vid3] }],
        character5: [furryCharacter5img1, furryCharacter5img2, { video: [furryCharacter5vid3] }],
        character6: [furryCharacter6img1, furryCharacter6img2, { video: [furryCharacter6img3] }],
        character7: [furryCharacter7img1, furryCharacter7img2],
        character8: [furryCharacter8img1, furryCharacter8img2],
        character9: [furryCharacter9img1, furryCharacter9img2, furryCharacter9img3, { video: [furryCharacter9vid4] }],
        character10: [furryCharacter10img1, furryCharacter10img2, furryCharacter10img3, { video: [furryCharacter10vid4] }],
        character11: [furryCharacter11img1, furryCharacter11img2, furryCharacter11img3, { video: [furryCharacter11vid4] }],
    },
    human: {
        character1: [humanCharacter1img1, humanCharacter1img2],
        character2: [humanCharacter2img1, humanCharacter2img2],
        character3: [humanCharacter3img1, humanCharacter3img2],
        character4: [humanCharacter4img1, humanCharacter4img2],
        character5: [humanCharacter5img1, humanCharacter5img2],
        character6: [humanCharacter6img1, humanCharacter6img2, humanCharacter6img3],
        character7: [humanCharacter7img1, humanCharacter7img2],
        character8: [humanCharacter8img1, humanCharacter8img2],
        character9: [humanCharacter9img1, humanCharacter9img2],
        // character10: [humanCharacter10img1, humanCharacter10img2],
        character11: [humanCharacter11img1, humanCharacter11img2],
        character12: [humanCharacter12img1, humanCharacter12img2],
        character13: [humanCharacter13img1, humanCharacter13img2],
        character14: [humanCharacter14img1, humanCharacter14img2],
        character15: [humanCharacter15img1, { video: [humanCharacter15vid2] }],
        character16: [humanCharacter16img1, humanCharacter16img2, humanCharacter16img3],
        character17: [humanCharacter17img1, { video: [humanCharacter17vid2] }],
        character18: [humanCharacter18img1, humanCharacter18img2, humanCharacter18img3],
        character19: [humanCharacter19img1, humanCharacter19img2, humanCharacter19img3, { video: [humanCharacter19vid1] }],
        character20: [humanCharacter20img1, humanCharacter20img2, humanCharacter20img3, { video: [humanCharacter20vid1] }],
        character21: [humanCharacter21img1, humanCharacter21img2, humanCharacter21img3],
        character22: [humanCharacter22img1, humanCharacter22img2, humanCharacter22img3],
    }
};

const CustomPrevArrow = ({ onClick }) => (
    <div className="carousel-arrows left-arrow" onClick={onClick}>
        <IoIosArrowBack />
    </div>
);

const CustomNextArrow = ({ onClick }) => (
    <div className="carousel-arrows right-arrow" onClick={onClick}>
        <IoIosArrowForward />
    </div>
);

const CharacterCarousel = ({ assets, windowWidth }) => (
    <Carousel
        arrows
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
        infinite
        autoplay
        autoplaySpeed={6000}
        effect={"scrollx"}
        className="main-carousel"
    >
        {assets.map((item, index) =>
            item.video ? (
                item.video.map((src, i) => (
                    <div className="carousel-div" key={`video-${index}-${i}`}>
                        <video
                            width={windowWidth < 430 ? 300 : 350}
                            height={windowWidth < 430 ? 350 : 400}
                            muted
                            autoPlay
                            loop
                            style={{ objectFit: "cover" }}
                        >
                            <source src={src} type="video/mp4" />
                        </video>
                    </div>
                ))
            ) : (
                <div className="carousel-div" key={`img-${index}`}>
                    <Image
                        width={windowWidth < 430 ? 300 : 350}
                        height={windowWidth < 430 ? 350 : 400}
                        src={item}
                        alt="Character"
                    />
                </div>
            )
        )}
    </Carousel>
);

const Avatar = ({ windowWidth }) => {
    const [increaseBy, setIncreaseBy] = useState(windowWidth <= 430 ? 6 : 10);

    useEffect(() => {
        setIncreaseBy(windowWidth <= 430 ? 6 : 10)
    }, [windowWidth])

    const [humanCount, setHumanCount] = useState(increaseBy);
    const [furryCount, setFurryCount] = useState(increaseBy);

    const renderCategory = (title, list, count, setCount) => (
        <>
            <h2 data-aos="fade-left" data-aos-duration={600}>{title}</h2>

            <Container className="img-container">
                {Object.entries(list)
                    .slice(0, count)
                    .map(([key, value]) => (
                        <div data-aos="zoom-in" className="img-div" key={key}>
                            <CharacterCarousel assets={value} windowWidth={windowWidth} />
                        </div>
                    ))}
            </Container>

            <div style={{ textAlign: "center" }}>
                {count < Object.keys(list).length ? (
                    <div className="load-more-btn-wrapper">
                        <button className="load-more-btn" onClick={() => setCount(prev => prev + increaseBy)}>
                            Load More
                        </button>
                    </div>
                ) : (
                    <div className="load-more-btn-wrapper">
                        <button className="load-more-btn" onClick={() => setCount(prev => prev + increaseBy)}>
                            Show Less
                        </button>
                    </div>
                )}
            </div>
        </>
    );

    return (
        <div className="main-img-div" id="3DModel">
            <h1>
                <p data-aos="fade-right" data-aos-duration={600}>3D Model</p>
                <SvgComponent />
            </h1>

            {renderCategory("Human", data3d.human, humanCount, setHumanCount)}

            <div className="division-line"></div>

            {renderCategory("Furry", data3d.furry, furryCount, setFurryCount)}
        </div>
    );
};

export default Avatar;