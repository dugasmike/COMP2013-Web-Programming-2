import React, { useState } from "react";
import Colors from '../Data/data'
export default function ColorBox(){
        const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * Colors.length)
        return Colors[randomIndex]
    };
    const [newColor, setColor] = useState(getRandomColor());

    const handleClick = () => {
    setColor(getRandomColor()); // change to a new random color on click
    
  };
    return (
        <div
            className="colorBox"
            style={{ backgroundColor: newColor }}
            onClick={handleClick}
        ></div>
    )
};