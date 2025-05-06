import React from 'react';
import "./style.css";
import { Container } from "react-bootstrap";
import { Image } from 'antd';
import { SvgComponent } from "../../Components";

import character1 from "../../Assets/CharacterArt/character1.png";
import character2 from "../../Assets/CharacterArt/character2.png";
import character3 from "../../Assets/CharacterArt/character3.png";
import character4 from "../../Assets/CharacterArt/character4.png";
import character5 from "../../Assets/CharacterArt/character5.png";
import character6 from "../../Assets/CharacterArt/character6.png";
import character7 from "../../Assets/CharacterArt/character7.png";
import character8 from "../../Assets/CharacterArt/character8.png";
import character9 from "../../Assets/CharacterArt/character9.png";
import character10 from "../../Assets/CharacterArt/character10.png";
import character11 from "../../Assets/CharacterArt/character11.png";
import character12 from "../../Assets/CharacterArt/character12.png";
import character13 from "../../Assets/CharacterArt/character13.png";
import character14 from "../../Assets/CharacterArt/character14.png";
import character15 from "../../Assets/CharacterArt/character15.png";
import character16 from "../../Assets/CharacterArt/character16.png";
import character17 from "../../Assets/CharacterArt/character17.png";
import character18 from "../../Assets/CharacterArt/character18.png";
import character19 from "../../Assets/CharacterArt/character19.png";
import character20 from "../../Assets/CharacterArt/character20.png";
import character21 from "../../Assets/CharacterArt/character21.png";
import character22 from "../../Assets/CharacterArt/character22.png";
import character23 from "../../Assets/CharacterArt/character23.png";
import character24 from "../../Assets/CharacterArt/character24.png";
import character25 from "../../Assets/CharacterArt/character25.png";
import character26 from "../../Assets/CharacterArt/character26.png";
import character27 from "../../Assets/CharacterArt/character27.png";
import character28 from "../../Assets/CharacterArt/character28.png";
import character29 from "../../Assets/CharacterArt/character29.png";
import character30 from "../../Assets/CharacterArt/character30.png";

const dataCharacterArt = {
    portrait: [
        character1, character2, character6, character8,
        character10, character11, character12, character13,
        character15, character16, character17, character18,
        character19, character20, character21, character22, character23,
        character24, character25, character26, character27, character28,
        character29, character30
    ],
    landscape: [
        character3, character4, character5, character9, character16,
        character7, character14
    ]
};

const CharacterArt = ({ windowWidth }) => {
    return (
        <div className="main-img-div" id='charcterArt'>
            <h1>
                <p data-aos="fade-right" data-aos-duration={600} >
                    Character Art
                </p>
                <SvgComponent />
            </h1>
            <Container className="img-container">
                {
                    dataCharacterArt && dataCharacterArt.portrait.map((value, key) => {
                        return (
                            <>
                                <div className='character-art-portrait' key={key + 'portrait'}>
                                    <Image
                                        width={windowWidth < 430 ? 250 : 300}
                                        height={windowWidth < 430 ? 300 : 400}
                                        src={value}
                                        alt="Image"
                                    />
                                </div>
                            </>
                        )
                    })
                }
                {
                    dataCharacterArt && dataCharacterArt.landscape.map((value, key) => {
                        return (
                            <>
                                <div className='character-art-landscape' key={key + 'landscape'}>
                                    <Image
                                        width={windowWidth < 430 ? 350 : 450}
                                        height={windowWidth < 430 ? 300 : 300}
                                        src={value}
                                        alt="Image"
                                    />
                                </div>
                            </>
                        )
                    })
                }
            </Container>
        </div >
    )
}

export default CharacterArt