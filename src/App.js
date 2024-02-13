import React, { useState, useEffect } from "react";
import "./App.css";
import Bezier from "./components/Bezier";
// import Curve from "./components/Curve";
import List from "./components/List";
import Icons from "./components/Icons";
import Review from "./components/Review";

const getRandomColor = () => {
  const colors = ['#F5CE64', '#FAAA67', '#F7B0BC', '#BBCBA1']
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

function App() {
  const [foodsData, setFoodsData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState(getRandomColor())

  useEffect(() => {
    fetch("https://presho99.github.io/skfoods/foods")
      .then((response) => response.json())
      .then((data) => setFoodsData(data.foodsData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const setRatingBoxColor = () => {
    setCurrentColor(getRandomColor)
  }

  return (
    <div className="App">
      <div className="left">
        <div className="top">
          <Bezier/>
          {/* <Curve foodsData={foodsData} activeIndex={activeIndex}/>   */}
        </div>
        <div className="middle">
          <List
            foodsData={foodsData}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setRatingBoxColor={setRatingBoxColor}
          />
        </div>
        <div className="bottom">
          <Icons />
        </div>
      </div>
      <div className="right">
        <Review activeIndex={activeIndex} foodsData={foodsData} currentColor={currentColor}/>
      </div>
    </div>
  );
}

export default App;
