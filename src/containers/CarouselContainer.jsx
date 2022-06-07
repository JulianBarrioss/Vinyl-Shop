import React, { useState, useEffect } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { CarouselData } from "../components/CarouselData";

import "../styles/containers/CarouselContainer.css";

const CarouselContainer = () => {
    const slides = CarouselData
    const [current, setCurrent] = useState(0);
    const lenght = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === lenght - 1 ? 0 : current + 1);
      clearTimeout(t);
      console.log(current +' next')
    }
  
    const prevSlide = () => {
      setCurrent(current === 0 ? lenght - 1 : current - 1);
      console.log(current +' prev')
    }

    var t = setTimeout(nextSlide, 3000)
  
    if(!Array.isArray(slides) || slides.length <= 0){
      return null; 
    }
  
    
  const classChanger = () => {
      if(current === 0) {
          return('mbdtf')
      } else if (current === 1) {
          return('blonde')
      } else {
        return ('igor')
      }
  }

  return (
    <div className={`carousel__container ${classChanger()}`}>
      <div className="carousel__text">
        <p>THE</p>
        <p>GREATEST</p>
        <p>ALBUMS</p>
      </div>
      <div className="carousel">
        <section className="slider">
          <NavigateBeforeIcon className="left-arrow" onClick={prevSlide} fontSize='large' />
          <NavigateNextIcon className="right-arrow" onClick={nextSlide} fontSize='large' />
          {slides.map((item, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={item.image} alt={item.title} className="image" />
                )}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export { CarouselContainer };
