import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useEffect, useState } from "react";
import { Footer, Loader, Hero } from "./Components";
import {
  Avatar, CharacterArt, Twitch, ReferenceSheet, VrWorld, ArtRoom,
  Dnd, LogoAndBanner, ComicBook,
  About,
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

  // const [showLoader, setShowLoader] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowLoader(false)
  //   }, 5000)
  // });

  return (
    <div onContextMenu={handleContextMenu}>
      {/* {showLoader && <Loader />} */}
      <Hero />
      <About />
      {/* <Avatar windowWidth={windowWidth} />
      <CharacterArt windowWidth={windowWidth} />
      <Twitch windowWidth={windowWidth} />
      <ReferenceSheet windowWidth={windowWidth} />
      <VrWorld windowWidth={windowWidth} />
      <ArtRoom windowWidth={windowWidth} />
      <Dnd windowWidth={windowWidth} />
      <LogoAndBanner windowWidth={windowWidth} />
      <ComicBook windowWidth={windowWidth} /> */}
      {/* <StickyIcons /> */}
      <Footer />
    </div>
  )
}

export default Portfolio;