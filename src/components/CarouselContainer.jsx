import React, { useState, useContext } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { CarouselData } from "../CarouselData";
import { AppContext } from "../context/AppContext";
import { Modal } from "./Modal";

import "../styles/components/CarouselContainer.css";

const CarouselContainer = () => {
  const { searchValue } = useContext(AppContext);
  const slides = CarouselData;
  const [current, setCurrent] = useState(0);
  const [modalState, setModalState] = useState(false);
  const lenght = slides.length;

  var t = 0;

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const classChanger = () => {
    if (current === 0) {
      return "mbdtf";
    } else if (current === 1) {
      return "blonde";
    } else if (current === 2) {
      return "igor";
    } else {
      return "ye";
    }
  };

  return (
    <div
      className={
        searchValue.length > 0
          ? "hidden"
          : `carousel__container ${classChanger()}`
      }
    >
      <div className="carousel__text">
        <p>THE</p>
        <p>GREATEST</p>
        <p>ALBUMS</p>
      </div>
      <div className="carousel">
        <section className="slider">
          <NavigateBeforeIcon
            className="left-arrow"
            onClick={prevSlide}
            fontSize="large"
          />
          <NavigateNextIcon
            className="right-arrow"
            onClick={nextSlide}
            fontSize="large"
          />
          {slides.map((item, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
                onClick={() => {
                  setModalState(!modalState);
                  clearTimeout(t);
                }}
              >
                {index === current && (
                  <>
                    <img
                      src={item.attributes.image}
                      alt={item.attributes.title}
                      className="image"
                    />
                    <Modal product={item} modalState={modalState} />
                  </>
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
