import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlay } from "@fortawesome/free-solid-svg-icons";
import trial from "../assets/try.webp";
import "../components/Bezier.css";

function Bezier({ activeImageUrl, foodsData, activeIndex, activeName, gradientColors }) {
  const canvasRef = useRef(null);
  // const imageRef = useRef(null)
  const position = useRef(0);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Control points
    const p0 = { x: 0, y: 50 }; // Starting point
    const p1 = { x: 100, y: 50 }; // First control point
    const p2 = { x: 400, y: 50 }; // Second control point
    const p3 = { x: 400, y: 450 }; // Ending point

    // Set background color
    ctx.fillStyle = "#cdcdcd";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw bezier curve
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, gradientColors[0]);
    gradient.addColorStop(1, gradientColors[1]);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 105; // Adjust line width for a thicker curve
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    ctx.stroke();

    // Load the image
    const image = new Image();
    image.src = activeImageUrl;
    image.onload = () => {
      // Move image along the curve
      const moveImage = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        ctx.fillStyle = "#cdcdcd"; // Set background color
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill canvas with background color
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
        ctx.stroke();

        // Calculate the position of image along the curve
        const t = position.current / 1000;
        const x = calculateBezier(t, p0.x, p1.x, p2.x, p3.x);
        const y = calculateBezier(t, p0.y, p1.y, p2.y, p3.y);

        // Draw the image at the calculated position
        ctx.drawImage(image, x + 5, y - 65, 300, 300);

        position.current += 19;

        if (position.current <= 500) {
          requestAnimationFrame(moveImage);
        }
      };

      // Start the animation
      moveImage();
    };
    // setActiveName(foodsData[activeIndex]?.name || '')
  }, [activeImageUrl, gradientColors]);

  const calculateBezier = (t, p0, p1, p2, p3) => {
    return (
      Math.pow(1 - t, 3) * p0 +
      3 * Math.pow(1 - t, 2) * t * p1 +
      3 * (1 - t) * Math.pow(t, 2) * p2 +
      Math.pow(t, 3) * p3
    );
  };

  const formatActiveName = (name) => {
    const words = name.split(" ");
    if (words.length === 2) {
      return (
        <div className="name-box">
          <p className="light">{words[0]}</p>
          <h3 className="dark">{words[1]}</h3>
        </div>
      );
    } else if (words.length >= 3) {
      return (
        <div className="name-box">
          <p className="light">
            {words[0]} {words[1]}
          </p>
          <h3 className="dark">{words.slice(2).join(" ")}</h3>
        </div>
      );
    } else {
      return <p>{name}</p>;
    }
  };

  return (
    <div className="bezier-container">
      <canvas ref={canvasRef} width={600} height={400} className="canvas-transition"/>
      <div className="bezier-name">
        {formatActiveName(activeName)}
        <div className="bezier-icons">
          <div className="icon">
            <FontAwesomeIcon icon={faPlay} className="lefty" />
            <p>Play video</p>
          </div>

          <div className="icon">
            <FontAwesomeIcon icon={faHome} className="lefty" />
            <p>Order Food</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bezier;
