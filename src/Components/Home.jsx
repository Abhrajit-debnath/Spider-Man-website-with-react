import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../App.css";

function Home() {
  useGSAP(() => {
    gsap.from(".box", {
      y: 50,
      duration: 1,
      stagger: 0.5,
      opacity: 0,
    });

    gsap.from(".home .right", {
      y: -50,
      x: -100,
      duration: 1,
      opacity: 0,
    });

    gsap.to(".move", {
      y: -20,
      x:-10,
      repeat:-1,    
      yoyo: 2,
      duration: 2,
    }, "-=1")

    gsap.from(".activision", {
      filter: "brightness(100)",
      duration:3,
      yoyo: 2,
      repeat:-1,
    });

    gsap.to(".activision", {
      filter: "brightness(0)",
      duration:3,
      yoyo: 2,
      repeat:-1,
    });


    gsap.from(".left h1 span", {
      repeat: -1,
      yoyo:true,
      duration: 1.2,
      stagger: 0.2,
      opacity: 0,
    });

    gsap.from(".left h1 ", {
      y:-100,
      duration: 1.2,
      opacity: 0,
    });

    gsap.from(".left p", {
      x:100,
      duration: 1.1,
      opacity: 0,
    });


    gsap.from(".home button", {
      x:-80,
      stagger:0.3,
      duration: 1,
      opacity: 0,
    });

   
  });

  return (
    <div className="home">
      <img
        src="/Images/activision.png"
        alt="Activision"
        className="activision"
      />
      <div className="left">
      <h1>
          <span>S</span>
          <span>P</span>
          <span>I</span>
          <span>D</span>
          <span>E</span>
          <span>R</span>
          <span>-</span>
          <span>M</span>
          <span>A</span>
          <span>N</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In magnam
          iste quasi accusantium iusto, similique pariatur reiciendis eos
          inventore eum? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Asperiores, aliquam!
        </p>
        <div className="btn">
          <button>Buy Now</button>
          <button>Watch Later</button>
        </div>
      </div>
      <div className="right move">
        <img src="/Images/spider-man.png" alt="Spider-Man" />
      </div>
      <div className="list">
        {["About", "Support", "Team"].map((nameItem, index) => (
          <div key={index} className="box">
            <h2>
              0{index + 1} {nameItem}
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
