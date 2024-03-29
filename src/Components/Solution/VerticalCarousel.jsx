import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
// import { ReactComponent as Next } from "./assets/chevronDown.svg";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
// import { ReactComponent as Prev } from "./assets/chevronUp.svg";
import "./VerticalCarousel.css";
import CallMadeSharpIcon from '@mui/icons-material/CallMadeSharp';

const VerticalCarousel = ({ data, leadingText }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  /* // Used to determine which items appear above the active item */
  const halfwayIndex = Math.ceil(data.length / 2);

  /* // Usd to determine the height/spacing of each item */
  const itemHeight = 52;

  /* // Used to determine at what point an item is moved from the top to the bottom */
  const shuffleThreshold = halfwayIndex * itemHeight;

  /* // Used to determine which items should be visible. this prevents the "ghosting" animation */
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    /* // If these match, the item is active */
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <div className="container">
      <section className="outer-container">
        <div className="carousel-wrapper">
          <button
            type="button"
            className="carousel-button prev"
            onClick={() => handleClick("prev")}
          >
          
          <ArrowDownwardRoundedIcon className="carouselarrowdown"/>
          </button>

          <div className="carousel">
            {/* <div className="leading-text">
              <p>{leadingText}</p>
            </div> */}
            <div className="slides">
              <div className="carousel-inner">
                {data.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn("carousel-item", {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                    })}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`
                        
                    }}
                  >
                 
                {item.introline} <span className="slic" >  
                 &nbsp; &nbsp; 
                  </span>
                 
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="carousel-button next"
            onClick={() => handleClick("next")}
          >
            
            <ArrowUpwardRoundedIcon className="carouselarrowup" />
          </button>
        </div>
        <div className="content">
          <img
            src={data[activeIndex].content.image}
            alt={data[activeIndex].content.introline}
          />
          <p>{data[activeIndex].content.copy}</p>
        </div>
      </section>
    </div>
  );
};

VerticalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  leadingText: PropTypes.string.isRequired
};

export default VerticalCarousel;
