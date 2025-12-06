import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

import set1img1DND from "../../Assets/DND/set1img1.png";
import set1img2DND from "../../Assets/DND/set1img2.png";
import set3img1DND from "../../Assets/DND/set3img1.png";
import set3img2DND from "../../Assets/DND/set3img2.png";
import set4img1DND from "../../Assets/DND/set4img1.png";
import set4img2DND from "../../Assets/DND/set4img2.png";
import set5img1DND from "../../Assets/DND/set5img1.png";
import set6img1DND from "../../Assets/DND/set6img1.png";
import set7img1DND from "../../Assets/DND/set7img1.png";
import set8img1DND from "../../Assets/DND/set8img1.png";
import set9img1DND from "../../Assets/DND/set9img1.png";
import set10img1DND from "../../Assets/DND/set10img1.png";
import set11img1DND from "../../Assets/DND/set11img1.png";
import set12img1DND from "../../Assets/DND/set12img1.png";
import set13img1DND from "../../Assets/DND/set13img1.png";
import set14img1DND from "../../Assets/DND/set14img1.png";
import set15img1DND from "../../Assets/DND/set15img1.png";
import set16img1DND from "../../Assets/DND/set16img1.png";
import set17img1DND from "../../Assets/DND/set17img1.png";
import set18img1DND from "../../Assets/DND/set18img1.png";
import set19img1DND from "../../Assets/DND/set19img1.png";
import set20img1DND from "../../Assets/DND/set20img1.png";
import set21img1DND from "../../Assets/DND/set21img1.png";
import set22img1DND from "../../Assets/DND/set22img1.png";
import set23img1DND from "../../Assets/DND/set23img1.png";
import { useEffect, useState } from "react";

const dataDND = {
    set10: [set10img1DND],
    set11: [set11img1DND],
    set12: [set12img1DND],
    set13: [set13img1DND],
    set14: [set14img1DND],
    set15: [set15img1DND],
    set16: [set16img1DND],
    set17: [set17img1DND],
    set18: [set18img1DND],
    set19: [set19img1DND],
    set20: [set20img1DND],
    set21: [set21img1DND],
    set22: [set22img1DND],
    set23: [set23img1DND],
    set1: [set1img1DND, set1img2DND],
    set3: [set3img1DND, set3img2DND],
    set4: [set4img1DND, set4img2DND],
    set5: [set5img1DND],
    set6: [set6img1DND],
    set7: [set7img1DND],
    set8: [set8img1DND],
    set9: [set9img1DND],
};

const DND = ({ windowWidth }) => {
    const allImages = Object.values(dataDND).flat(); // convert all to a single array

    const [increaseBy, setIncreaseBy] = useState(windowWidth <= 430 ? 6 : 10);

    useEffect(() => {
        setIncreaseBy(windowWidth <= 430 ? 6 : 10)
    }, [windowWidth])

    const [visibleCount, setVisibleCount] = useState(increaseBy);

    return (
        <div className="main-img-div" id='dnd'>
            <h1 id='dnd'>
                <p data-aos="fade-right" data-aos-duration={600} >
                    DND
                </p>
                <SvgComponent />
            </h1>

            <Container className="img-container">
                {allImages.slice(0, visibleCount).map((imageUrl, index) => (
                    <div data-aos="zoom-in" className='character-art-portrait' key={index}>
                        <Image
                            width={200}
                            height={windowWidth < 430 ? 250 : 300}
                            src={imageUrl}
                            alt="Image"
                        />
                    </div>
                ))}
                {visibleCount < allImages.length ?
                    <div className="load-more-btn-wrapper">
                        <button className="load-more-btn" onClick={e => setVisibleCount(prev => prev + increaseBy)}>
                            Load More
                        </button>
                    </div> :
                    <div className="load-more-btn-wrapper">
                        <button className="load-more-btn" onClick={e => setVisibleCount(increaseBy)}>
                            Hide
                        </button>
                    </div>
                }
            </Container>
        </div>
    );
};

export default DND;