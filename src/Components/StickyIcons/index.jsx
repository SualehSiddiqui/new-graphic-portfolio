import React, { useState } from 'react'
import "./style.css";
import { FaXTwitter, FaWhatsapp, FaInstagram, FaArrowDown } from "react-icons/fa6";

function StickyIcons() {
    const [showIcons, setShowIcons] = useState(false);
    return (
        <>
            <div
                className='scroll-to-bottom'
                onClick={e => window.scrollTo(0, window.scrollY + (window.innerHeight * 1.5))}
            >
                <FaArrowDown />
            </div>
            <input
                className='hidden-input'
                checked={showIcons}
                onChange={e =>
                    setShowIcons(!showIcons)
                }
                type="checkbox"
                id='chk'
                name='checkbox'
            />
            <label htmlFor="chk" className='icon-check'>
            </label>
            <a
                href='https://wa.me/13868469348'
                target='_blank'
                rel="noopener noreferrer"
                className='icons-div icons-div-1'
            >
                <FaWhatsapp className="nav-icons" />
            </a>
            <a
                href='https://x.com/ArtistryModel?t=5LbTgHQD_9SU7DeSiQVrXA&s=09'
                target='_blank'
                rel="noopener noreferrer"
                className='icons-div icons-div-2'
            >
                <FaXTwitter className="nav-icons" />
            </a>
            <a
                href='https://www.instagram.com/artistry_world_?igsh=aXVtaThtMm5jMHBx'
                target='_blank' rel="noopener noreferrer"
                className='icons-div icons-div-3'
            >
                <FaInstagram className="nav-icons" />
            </a>
        </>
    )
}

export default StickyIcons;