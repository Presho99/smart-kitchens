import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../components/List.css";

function List() {
  const [foodsData, setFoodsData] = useState([]);

  useEffect(() => {
    fetch("https://presho99.github.io/skfoods/foods")
      .then((response) => response.json())
      .then((data) => setFoodsData(data.foodsData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="list">
      <div  className="list-container">
      <FontAwesomeIcon icon={faAngleLeft} className="arrow"/>
        <div className="itself-box">
         
          {foodsData.map((food) => (
            <div key={food.id} className="food-itself">
              <img src={food.avatar} className="image" />
              <p className="name">{food.name}</p>
            </div>
          ))}
         
        </div>
        <FontAwesomeIcon icon={faAngleRight} className="arrow"/>
      </div>
    </div>
  );
}

export default List;
