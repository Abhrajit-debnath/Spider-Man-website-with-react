import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../App.css";
import { Link, redirect  } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function About() {
  useGSAP(() => {
    gsap.from(".goblin", {
      y: -800,
      duration: 0.5,
      opacity: 0,
    });

    gsap.from(".spider-about", {
      scale: 0,
      x: -800,
      y: -900,
      duration: 3,
      opacity: 0,
      delay: 4.7,
    });

    gsap.to(".goblin", {
      x: -800,
      y: -800,
      duration: 2,
      delay: 1,
      scale: 0,
    });

    gsap.from(".head h2 span", {
      x: -400,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      delay: 3,
    });

    gsap.to(".head h2 span", {
      y: 400,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      delay: 5.5,
    });

    gsap.from(".head h2", {
      x: -400,
      opacity: 0,
      duration: 1.2,
      delay: 3,
    });
    gsap.to(".head h2", {
      display: "none",
      delay: 7,
    });

    gsap.from(".abt-box", {
      x: -400,
      opacity: 0,
      duration: 0.5,
      delay: 6.5,
      ease: "power1.inout",
    });

    gsap.from(".abt-box2", {
      y: -400,
      opacity: 0,
      duration: 0.5,
      delay: 6.5,
      ease: "power1.inout",
    });

    gsap.from(".abt-box .content h3", {
      y: -30,
      opacity: 0,
      stagger: 1,
      duration: 1,
      delay: 6.5,
      ease: "power1.in",
    });

    gsap.from(".abt-box .content p", {
      x: -30,
      opacity: 0,
      stagger: 1,
      duration: 1,
      delay: 6.5,
      ease: "power1.in",
    });

    gsap.to(".spider-about", {
       scale:1,
      repeat: -1,
      yoyo: 2,
       duration: 5,
    }, "-=1");

    
    gsap.from(".explore", {
      y: -5,
      opacity: 0,
      duration: 1,
      delay: 6.5,
    });

    gsap.to(".explore", {
      repeat: -1,
      yoyo: 2,
      y:5,
      duration: 1,
     
    });

    gsap.to(".down", {
      repeat: -1,
      yoyo: 2,
      y:5,
      duration: 1,
     
    });
  }, []);




  return (
    <div className="About">
      <img src="/Images/goblin.png" alt="Goblin" className="goblin" />
      <Link to={"/wallpaper"}>
      <img src="/Images/spider-about.png" alt="Spider" className="spider-about" />
      </Link>

      <Link to={"/wallpaper"}>
      <div className="explore">
        <h4>Explore Spider <span style={{color:"red"}}>Verse</span></h4>
        <IoIosArrowDown color="white" size="30px" className="down"/>
      </div>
      </Link>

      <div className="head">
        <h2>
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </h2>
      </div>
      <div className="abt-box">
        <div className="box"></div>
        <div className="content">
          <h3>About Spider-Man</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quia
            repudiandae minus molestias quod, nemo delectus, inventore harum
            consectetur ea, tempore accusantium. Quos commodi, minus, veniam
            architecto quaerat, veniam quod earum autem repellendus voluptatum
            magnam.
          </p>
        </div>
      </div>

      <div className="abt-box2">
        <div className="box"></div>
        <div className="content">
          <h3>About Spider-Man</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quia
            repudiandae minus molestias quod, nemo delectus, inventore harum
            consectetur ea, tempore accusantium. Quos commodi, minus, veniam
            architecto quaerat, veniam quod earum autem repellendus voluptatum
            magnam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
