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
  const [slideIndex2, setSlideIndex2] = useState(1);

  useEffect(() => {
    showSlides(slideIndex, 'slider1', setSlideIndex);
  }, [slideIndex]);

  useEffect(() => {
    showSlides(slideIndex2, 'slider2', setSlideIndex2);
  }, [slideIndex2]);


  function plusSlides(sliderId, n, functionIndex) {
    const slides = document.getElementById(sliderId).querySelectorAll('.slide');
    
    functionIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      if (newIndex > slides.length) return 1;
      if (newIndex < 1) return slides.length;
      return newIndex;
    });
  }

  function showSlides(index, sliderId, functionIndex) {
    const slides = document.getElementById(sliderId).querySelectorAll('.slide');

    if (index > slides.length) functionIndex(1);
    if (index < 1) functionIndex(slides.length);

    slides.forEach((slide, i) => {
      if (functionIndex === setSlideIndex){
      slide.style.display = i === (slideIndex - 1) ? 'block' : 'none';}
      else{
        slide.style.display = i === (slideIndex2 - 1) ? 'block' : 'none';
      }
    });

  }

  return (
    <>
      <Header/>
      <section className="gal" 
      style={
        {
          position: 'relative',
          top: '1rem',
          zIndex: '2',
          padding: '4rem 15%',
        }
      }>
        <h2>Galeria</h2>
        <div className="slider_container" id="slider1" 
        style={
          {
            width: '60%',
            margin: 'auto',
            overflow: 'hidden',
            position: 'relative',
          }
        }>
          <div className="slides" id="slides" 
          style={
            {
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
            }
          }>
            <div className="slide" id="slide">
              <img src={cerrojo} alt="Imagen 1" />
            </div>
            <div className="slide" id="slide">
              <img src={cerrajero2} alt="Imagen 2" />
            </div>
            <div className="slide" id="slide">
              <img src={cerrajero3} alt="Imagen 3" />
            </div>
          </div>
          <div
            className="prev"
            id="prev"
            onClick={() => plusSlides('slider1', -1, setSlideIndex)}
            style={{
              position: 'absolute',
              top: '50%',
              width: 'auto',
              padding: '16px',
              margin: '-22px 0 0 0',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'background-color 0.3s ease', // Add transition for a smooth effect
              backgroundColor: 'initial', // Initial background color
            }}
            onMouseOver={() => {
              // Change background color on hover
              document.getElementById('prev').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            }}
            onMouseOut={() => {
              // Restore initial background color on mouse out
              document.getElementById('prev').style.backgroundColor = 'initial';
            }}
          ><p>&lt;</p>
          </div>

          <div className="next" id="next" onClick={() => plusSlides('slider1', 1, setSlideIndex)}   
          style={{
              position: 'absolute',
              top: '50%',
              width: 'auto',
              padding: '16px',
              margin: '-22px 0 0 0',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'background-color 0.3s ease', // Add transition for a smooth effect
              backgroundColor: 'initial', // Initial background color
              right: '0',
            }}
            onMouseOver={() => {
              // Change background color on hover
              document.getElementById('next').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            }}
            onMouseOut={() => {
              // Restore initial background color on mouse out
              document.getElementById('next').style.backgroundColor = 'initial';
            }}
          ><p>&gt;</p>
          </div>
      
        </div>
      </section>
      
      <section className="gal" 
      style={
        {
          position: 'relative',
          top: '1rem',
          zIndex: '2',
          padding: '4rem 15%',
        }
      }>
        <h2>Galeria</h2>
        <div className="slider_container" id="slider2" 
        style={
          {
            width: '60%',
            margin: 'auto',
            overflow: 'hidden',
            position: 'relative',
          }
        }>
          <div className="slides" id="slides" 
          style={
            {
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
            }
          }>
            <div className="slide" id="slide">
              <img src={cerrojo} alt="Imagen 1" />
            </div>
            <div className="slide" id="slide">
              <img src={cerrajero2} alt="Imagen 2" />
            </div>
            <div className="slide" id="slide">
              <img src={cerrajero3} alt="Imagen 3" />
            </div>
          </div>
          <div
            className="prev"
            id="prev2"
            onClick={() => plusSlides('slider2', -1, setSlideIndex2)}
            style={{
              position: 'absolute',
              top: '50%',
              width: 'auto',
              padding: '16px',
              margin: '-22px 0 0 0',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'background-color 0.3s ease', // Add transition for a smooth effect
              backgroundColor: 'initial', // Initial background color
            }}
            onMouseOver={() => {
              // Change background color on hover
              document.getElementById('prev2').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            }}
            onMouseOut={() => {
              // Restore initial background color on mouse out
              document.getElementById('prev2').style.backgroundColor = 'initial';
            }}
          ><p>&lt;</p>
          </div>

          <div 
            className="next" 
            id="next2" 
            onClick={() => plusSlides('slider2', 1, setSlideIndex2)}   
            style={{
              position: 'absolute',
              top: '50%',
              width: 'auto',
              padding: '16px',
              margin: '-22px 0 0 0',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'background-color 0.3s ease', // Add transition for a smooth effect
              backgroundColor: 'initial', // Initial background color
              right: '0',
            }}
            onMouseOver={() => {
              // Change background color on hover
              document.getElementById('next2').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            }}
            onMouseOut={() => {
              // Restore initial background color on mouse out
              document.getElementById('next2').style.backgroundColor = 'initial';
            }}
          ><p>&gt;</p>
          </div>
      
        </div>
      </section>

      <Footer/>
    </>
  );
        }

export default Galeria;
