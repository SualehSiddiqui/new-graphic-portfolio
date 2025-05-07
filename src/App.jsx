import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useEffect, useState } from "react";
import { Footer, Hero } from "./Components";
import {
  Avatar3d, Avatar2d, CharacterArt, ReferenceSheet, VrWorld, ArtRoom,
  DND, DNDGroupArtWork, DNDReferenceSheet, PrintableModel, LogoAndBanner, ComicBook,
  About, Contact, OCDesign, StreamingPackage,
} from "./Sections";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Define the handler for the resize event
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add the event listener when the component mounts
    window.addEventListener('resize', handleResize);
  }, []);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Hero />
      <About />
      <CharacterArt windowWidth={windowWidth} />
      <OCDesign windowWidth={windowWidth} />
      <DND windowWidth={windowWidth} />
      <Avatar3d windowWidth={windowWidth} />
      <Avatar2d windowWidth={windowWidth} />
      <DNDReferenceSheet windowWidth={windowWidth} />
      <ReferenceSheet windowWidth={windowWidth} />
      <DNDGroupArtWork windowWidth={windowWidth} />
      <StreamingPackage windowWidth={windowWidth} />
      <LogoAndBanner windowWidth={windowWidth} />
      <PrintableModel windowWidth={windowWidth} />
      <VrWorld windowWidth={windowWidth} />
      <ArtRoom windowWidth={windowWidth} />
      <ComicBook windowWidth={windowWidth} />
      <Contact />
      {/* <StickyIcons /> */}
      <Footer />
    </div>
  )
}

export default Portfolio;