import React, { useState, useRef, useEffect } from 'react';
import './Osolutionpslider.scss';
import Graphic_design from "../../assets/graphic.png"
import UIux from "../../assets/uiux.png"
// import Web_development from "../../assets/webdevelopment.png"
import Game_development from "../../assets/game.png"
import Video_editing from "../../assets/video.png"
import App_development from "../../assets/app.png"
import Personal_finance from "../../assets/pf.png"
import AR_application from "../../assets/ar.png"
import Social_media_marketing from "../../assets/smm.png"
import Web_development from "../../assets/Web.jpg"



const Osolutionpslider = () => {
  const text1_options = [
    "Graphic Designing",
    "UI/UX Designing",
    "Web Development",
    "Game Development",
    "Video Editing",
    "App Development",
    "Personal Finance",
    "AR Application",
    "Social Media Marketing"

   
  ];
  const text2_options = [
    `"Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs"`,
    `"Good design is obvious. Great design is transparent." - Joe Sparano`,
    `"The strength of JavaScript is that you can do anything. The weakness is that you will." - Reg Braithwaite`,
      `"Every game is an opportunity to measure yourself against your own potential." - Bud Wilkinson`,
      ` "Editing is not merely a method; it's the essence of cinema." - Francis Ford Coppola`,
      `"The best way to predict the future is to create it." - Peter Drucker`,
    ` "The goal isn't more money. The goal is living life on your terms." - Chris Brogan`,
    ` "Augmented reality will be the next major shift in computing." - Tim Cook`,
      `"Content is fire, social media is gasoline." - Jay Baer`

  ];
  const color_options = ["transparent", "transparent", "transparent", "transparent  "];
  const image_options = [
    Graphic_design,
    UIux,
    Web_development,
    Game_development,
    Video_editing,
    App_development,
    Personal_finance,
    AR_application,
    Social_media_marketing

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentOptionText1 = useRef(null);
  const currentOptionText2 = useRef(null);
  const currentOptionImage = useRef(null);
  const carousel = useRef(null);
  const mainMenu = useRef(null);


  const handleOptionNext = () => {
    const newIndex = (currentIndex + 1) % text1_options.length;

    currentOptionText1.current.dataset.nextText = text1_options[newIndex];
    currentOptionText2.current.dataset.nextText = text2_options[newIndex];

    mainMenu.current.style.background = color_options[newIndex];
    carousel.current.classList.add("anim-next");

    setTimeout(() => {
      currentOptionImage.current.style.backgroundImage = `url(${image_options[newIndex]})`;
    }, 455);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      currentOptionText1.current.innerText = text1_options[newIndex];
      currentOptionText2.current.innerText = text2_options[newIndex];
      carousel.current.classList.remove("anim-next");
    }, 650);
  };

  const handleOptionPrevious = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = text1_options.length - 1;
    }

    currentOptionText1.current.dataset.previousText = text1_options[newIndex];
    currentOptionText2.current.dataset.previousText = text2_options[newIndex];

    mainMenu.current.style.background = color_options[newIndex];
    carousel.current.classList.add("anim-previous");

    setTimeout(() => {
      currentOptionImage.current.style.backgroundImage = `url(${image_options[newIndex]})`;
    }, 455);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      currentOptionText1.current.innerText = text1_options[newIndex];
      currentOptionText2.current.innerText = text2_options[newIndex];
      carousel.current.classList.remove("anim-previous");
    }, 650);
  };

    useEffect(() => {
      currentOptionText1.current.innerText = text1_options[currentIndex];
      currentOptionText2.current.innerText = text2_options[currentIndex];
      currentOptionImage.current.style.backgroundImage = `url(${image_options[currentIndex]})`;
    }
    , []);

  return (
    <>
      <div id="carousel-wrapper" ref={carousel}>
        <div id="menu" ref={mainMenu}>
          <div id="current-option">
            <span id="current-option-text1" data-previous-text="" data-next-text="" ref={currentOptionText1}></span>
            <span id="current-option-text2" data-previous-text="" data-next-text="" ref={currentOptionText2}></span>
          </div>
          <button id="previous-option" onClick={handleOptionPrevious}></button>
          <button id="next-option" onClick={handleOptionNext}></button>
        </div>
        <div id="image" ref={currentOptionImage}>
        
        </div>
      </div>
    </>
  );
};

export default Osolutionpslider;
