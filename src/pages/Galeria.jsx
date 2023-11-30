import React from "react";
import "./Galeria.module.css";
import cerrojo from "../assets/cerrojo.jpg";
import cerrajero2 from "../assets/cerrajero2.jpg";
import cerrajero3 from "../assets/candado.jpg";
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useEffect, useState } from 'react';

function Galeria() {
  const [slideIndex, setSlideIndex] = useState(1);
  

  useEffect(() => {
    showSlides(slideIndex, 'slider1');
  }, [slideIndex]);

  function plusSlides(sliderId, n) {
    const slides = document.getElementById(sliderId).querySelectorAll('.slide');
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      if (newIndex > slides.length) return 1;
      if (newIndex < 1) return slides.length;
      return newIndex;
    });
  }

  function showSlides(index, sliderId) {
    const slides = document.getElementById(sliderId).querySelectorAll('.slide');

    if (index > slides.length) setSlideIndex(1);
    if (index < 1) setSlideIndex(slides.length);

    slides.forEach((slide, i) => {
      slide.style.display = i === (slideIndex - 1) ? 'block' : 'none';
    });

  }

  return (
    <>
      
      <section className="gal">
        <h2>Galeria</h2>
        <div className="slider-container" id="slider1">
          <div className="slides">
            <div className="slide">
              <img src={cerrojo} alt="Imagen 1" />
            </div>
            <div className="slide">
              <img src={cerrajero2} alt="Imagen 2" />
            </div>
            <div className="slide">
              <img src={cerrajero3} alt="Imagen 3" />
            </div>
          </div>
          <div className="prev" onClick={() => plusSlides('slider1', -1)}></div>
          <div className="next" onClick={() => plusSlides('slider1', 1)}></div>
          {/* <div className="prev" ></div>
          <div className="next" ></div> */}
        </div>
      </section>
      
    </>
  );
        }

export default Galeria;
