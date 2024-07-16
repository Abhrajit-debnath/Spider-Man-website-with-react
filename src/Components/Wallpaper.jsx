import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../App.css";

function Wallpaper() {
  useGSAP(() => {
    gsap.from("video", {
      duration: 0.5,
      opacity: 0,
    });

    gsap.from(".text img", {
      duration: 1,
      x: -100,
      opacity: 0,
      delay: 6,
    });

    gsap.from(".text h2", {
      duration: 1,
      x: -100,
      opacity: 0,
      delay: 6,
    });

    gsap.from(".text h5", {
      duration: 1,
      x: 30,
      opacity: 0,
      delay: 6,
    });

    gsap.to(".text img", {
      duration: 1,
      x: -100,
      opacity: 0,
      delay: 10,
    });

    gsap.to(".text h2", {
      duration: 1,
      x: -100,
      opacity: 0,
      delay: 10,
    });

    gsap.to(".text h5", {
      duration: 1,
      x: 30,
      opacity: 0,
      delay: 10,
    });

    gsap.from(".spider", {
      duration: 1,
      y: -50,
      opacity: 0,
      delay: 11,
      ease: "bounce.inOut",
    });

    gsap.to(".spider", {
      duration: 4,
      x: -100,
      yoyo: 2,
      repeat: -1,
      delay: 12,
      ease: "power1.out",
    });

    gsap.from(".wall-btn", {
      duration: 1,
      x: -200,
      opacity: 0,
    });
  }, []);

  return (
    <div className="wallpaper">
      <video
        src="./Videos/wallpaper.mp4"
        className="fullscreen-video"
        autoPlay
        muted
        loop
      ></video>
      <div className="text">
        <img src="/Images/spiddy.png" alt="" />
        <h2>SPIDER-MAN</h2>
        <h5>SPIDER-MAN</h5>
      </div>

      <div className="spider">
        <img src="/Images/spider.png" alt="" />
      </div>
      <Link to="/gameplay">
        <div className="wall-btn">
          <button>See Gameplays</button>
        </div>
      </Link>
    </div>
  );
}

export default Wallpaper;
