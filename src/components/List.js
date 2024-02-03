import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../components/List.css";

function List({setActiveIndex, foodsData, activeIndex, setRatingBoxColor}) {
 
  const handleArrowClick = (direction) => {
    const newIndex = direction === "right" 
    ? (activeIndex + 1) % foodsData.length 
    : (activeIndex - 1 + foodsData.length) % foodsData.length 
    setActiveIndex(newIndex)
    setRatingBoxColor()
    
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
