import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../components/List.css";

function List({setActiveIndex, foodsData, activeIndex, setRatingBoxColor, setGradientColors, getRandomGradient, setTransitionTriggered}) {
  // const [gradientColors, setGradientColors] = useState([getRandomGradient(), getRandomGradient()])
  // const smoothColorTransition = (color1, color2, duration, callback) => {
  //   const steps = 50
  //   const delay = duration / steps

  //   let step = 0
  //   const interval = setInterval(() => {
  //     const gradient = [
  //       `linear-gradient(to right, ${color1}, ${color2})`,
  //       `linear-gradient(to right, ${color2}, ${color1})`
  //     ]

  //     const currentGradient = gradient[step % 2]
  //     step++

  //     callback(currentGradient)

  //     if(step === steps * 2){
  //       clearInterval(interval)
  //     }

  //   }, delay)
  // }

  const handleArrowClick = (direction) => {
   
    const newIndex = direction === "right" 
    ? (activeIndex + 1) % foodsData.length 
    : (activeIndex - 1 + foodsData.length) % foodsData.length 
    setActiveIndex(newIndex)
    setRatingBoxColor()
    setTransitionTriggered(true)
    
   // Call getRandomGradient to get the new gradient colors
   const newGradientColors = getRandomGradient();
   // Set the new gradient colors with a transition duration of 2 seconds
   setGradientColors(newGradientColors);

  }


  

  
  return (
    <div className="list">
      <div  className="list-container">
      <FontAwesomeIcon icon={faAngleLeft} className="arrow" onClick={()=> handleArrowClick("left")}/>
        <div className="itself-box">
         
          {foodsData.map((food, index) => (
            <div key={food.id} className={`food-itself ${index === activeIndex ? "active" : ""}`}>
              <img src={food.avatar} className="image" />
              <p className="name">{food.name}</p>
            </div>
          ))}
         
        </div>
        <FontAwesomeIcon icon={faAngleRight} className="arrow" onClick={()=> handleArrowClick("right")}/>
      </div>
    </div>
  );
}

export default List;
