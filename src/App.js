import React, { useState, useEffect } from "react";
import "./App.css";
import Bezier from "./components/Bezier";
// import Curve from "./components/Curve";
import List from "./components/List";
import Icons from "./components/Icons";
import Review from "./components/Review";

const getRandomColor = () => {
  const colors = ["#F5CE64", "#FAAA67", "#F7B0BC", "#BBCBA1"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

function App() {
  const [foodsData, setFoodsData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState(getRandomColor());
  const [activeImageUrl, setActiveImageUrl] = useState("");
  const [activeName, setActiveName] = useState("");
  const [gradientColors, setGradientColors] = useState(["#F5CE64", "#FAAA67"]); // Define gradient colors state
  const [transitionTriggered, setTransitionTriggered] = useState(false);

  // Function to generate random linear gradient colors
  const getRandomGradient = () => {
    const colors = ["#F5CE64", "#FAAA67", "#F7B0BC", "#BBCBA1"];
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    let color2 = colors[Math.floor(Math.random() * colors.length)];
    while (color2 === color1) {
      color2 = colors[Math.floor(Math.random() * colors.length)];
    }
    return [color1, color2];
  };

  useEffect(() => {
    fetch("https://presho99.github.io/skfoods/foods")
      .then((response) => response.json())
      .then((data) => {
        setFoodsData(data.foodsData);
        setActiveImageUrl(data.foodsData[0]?.avatar || "");
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const setRatingBoxColor = () => {
    setCurrentColor(getRandomColor);
  };

  useEffect(() => {
    setActiveImageUrl(foodsData[activeIndex]?.avatar || "");
    setActiveName(foodsData[activeIndex]?.name || "");
  }, [activeIndex, foodsData]);

  return (
    <div className="App">
      <div className="left">
        <div className="top">
          <Bezier
            activeImageUrl={activeImageUrl}
            foodsData={foodsData}
            activeIndex={activeIndex}
            activeName={activeName}
            gradientColors={gradientColors}
            getRandomGradient={getRandomGradient}
            transitionTriggered={transitionTriggered}
          />
          {/* <Curve foodsData={foodsData} activeIndex={activeIndex}/>   */}
        </div>
        <div className="middle">
          <List
            foodsData={foodsData}
            setGradientColors={setGradientColors}
            getRandomGradient={getRandomGradient}
            activeIndex={activeIndex}
            setActiveIndex={(index) => {
              setActiveIndex(index);
              setActiveImageUrl(foodsData[index]?.avatar || "");
              setTransitionTriggered(false)
            }}
            setRatingBoxColor={setRatingBoxColor}
            setTransitionTriggered={setTransitionTriggered}
            // position={position}
          />
        </div>
        <div className="bottom">
          <Icons />
        </div>
      </div>
      <div className="right">
        <Review
          activeIndex={activeIndex}
          foodsData={foodsData}
          currentColor={currentColor}
        />
      </div>
    </div>
  );
}

export default App;
