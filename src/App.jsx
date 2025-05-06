import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useEffect, useState } from "react";
import { Footer, Hero } from "./Components";
import {
  Avatar3d, Avatar2d, CharacterArt, Twitch, ReferenceSheet, VrWorld, ArtRoom,
  DND, DNDGroupArtWork, DNDReferenceSheet, PrintableModel, LogoAndBanner, ComicBook,
  About, OCDesign, StreamingPackage,
} from "./Sections";


const Portfolio = () => {
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
      <Avatar2d windowWidth={windowWidth} />
      <Avatar3d windowWidth={windowWidth} />
      <CharacterArt windowWidth={windowWidth} />
      <Twitch windowWidth={windowWidth} />
      <ReferenceSheet windowWidth={windowWidth} />
      <VrWorld windowWidth={windowWidth} />
      <ArtRoom windowWidth={windowWidth} />
      <DND windowWidth={windowWidth} />
      <DNDGroupArtWork windowWidth={windowWidth} />
      <DNDReferenceSheet windowWidth={windowWidth} />
      <PrintableModel windowWidth={windowWidth} />
      <OCDesign windowWidth={windowWidth} />
      <StreamingPackage windowWidth={windowWidth} />
      <LogoAndBanner windowWidth={windowWidth} />
      <ComicBook windowWidth={windowWidth} />
      {/* <StickyIcons /> */}
      <Footer />
    </div>
  )
}

export default Portfolio;