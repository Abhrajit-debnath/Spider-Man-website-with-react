import React from "react";
import "../App.css";

function Gameplay() {
  return (
    <div className="loader">
      <div className="circle"></div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <img src="/Images/controller.png" alt="" className="play" />
    </div>
  );
}

export default Gameplay;
