import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Loader from "../Components/Loader";
import "../App.css";
import { useGSAP } from "@gsap/react";

function Gameplay() {
  const [showContent, setShowContent] = useState(true);
  const mouseFollowerRef = useRef(null);
  const slidesRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screen, setScreen] = useState("");
  const videos = [
    "https://www.youtube.com/embed/nTW3QlsHZWc",
    "https://www.youtube.com/embed/ZRhJT2nmvA4",
    "https://www.youtube.com/embed/pyKONWsQ1ek",
    "https://www.youtube.com/embed/W4rlzaK0Roo",
    "https://www.youtube.com/embed/ayeQ3CTLlMU",
    "https://www.youtube.com/embed/A1b7kToscP0",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (showContent) {
      gsap.from(".play", {
        scale: 0,
        duration: 1.2,
        opacity: 0,
      });
    }

    gsap.from(".screen", {
      y: 40,
      ease: "bounce.out",
      duration: 1,
      opacity: 0,
    });

    gsap.from(".screen-right img", {
      ease: "bounce.out",
      x: -300,
      duration: 0.6,
      opacity: 0,
    });

    gsap.from(".text", {
      ease: "bounce.out",
      y: 300,
      duration: 1,
      opacity: 0,
    });
  }, [showContent]);

  useEffect(() => {
    const mousemove = (e) => {
      requestAnimationFrame(() => {
        if (mouseFollowerRef.current) {
          gsap.to(mouseFollowerRef.current, {
            left: e.clientX,
            top: e.clientY,
            duration: 1,
          });
        }
      });
    };

    if (!showContent) {
      document.addEventListener("mousemove", mousemove);
    }

    return () => {
      document.removeEventListener("mousemove", mousemove);
    };
  }, [showContent]);

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : videos.length - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < videos.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="gameplay">
      {showContent ? (
        <Loader />
      ) : (
        <>
          <div
            ref={mouseFollowerRef}
            className="mouse-follower"
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              filter: "blur(90px)",
              left: "50%",
              backgroundColor: "rgba(0, 0, 255, 0.301)",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "-1",
            }}
          />
          <div className="screen">
            <div
              className="slider"
              ref={slidesRef}
              style={{ display: "flex", transition: "transform 0.5s ease" }}
            >
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="slide"
                  style={{ flexShrink: 0, width: "100%", height: "100%" }}
                >
                  <iframe
                    src={video}
                    title={`Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ width: "100%", height: "100%" }}
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
          <button className="prev" onClick={previousSlide}>
            &#10094;
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
          <div className="screen-right">
            <img
              src="/Images/spider4.png"
              alt="Spider Image"
              width="500px"
              height="900px"
            />
          </div>

          <h6 className="text">
            SPIDER-<span>MAN</span>
          </h6>
        </>
      )}
    </div>
  );
}

export default Gameplay;
