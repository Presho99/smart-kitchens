import React, { useEffect, useState } from "react";
import "../components/Curve.css";

function Curve({ foodsData, activeIndex }) {
    // const [angles, setAngles] = useState([0, 90, 180, 270].map(angle => angle % 360))

    // useEffect(() => {
    //    const interval = setInterval(() => {
    //        setAngles((prevAngles) => prevAngles.map((angle) => (angle + 1) % 360))
    //    }, 50)
    //    return () => clearInterval(interval)
    // }, []) 
  return (
    <div className="curve">
      <div className="ring">
        {foodsData.map((food, angle, index) => (
            <div className="ring-box" style={{transform: `rotate(${angle}deg) translate(100px) rotate(-${angle}deg)`}}>
          <img
            key={food.id}
            src={food.avatar}
            alt={food.name}
            className="ring-image"
            style={{transform: `rotate(${(index * (360 / foodsData.length))}deg)`}}
          />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curve;
