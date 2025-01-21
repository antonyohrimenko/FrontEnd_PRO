// Используем хуки

// Задача 1. Доделываем кнопочки с цветом

import "./homework04_01.css";
import { useState } from "react";

export default function Homework04_01() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };

  // поиграемся с белевыми состояниями в хуках (которая скрывала бы счетчик)
  // реализуем кнопку переключатель для того, чтобы спрятать или показывать наш счетчик

  const [isVisible, setIsVisible] = useState(false);
  const handleSwitcher = () => {
    setIsVisible((prev) => !prev);
  };

  // Состояние для смены цвета
  const [color, setColor] = useState("black"); // По умолчанию "black"

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <h2>Homework 04. UseState() Hook 🪝🦦</h2>

      <div>
        <button onClick={handleSwitcher}>
          {" "}
          👉 {isVisible ? "Hide counter" : "Show counter"} 👈{" "}
        </button>
      </div>

      {isVisible && (
        <div className={`counter ${color}`}>
          <button onClick={handleMinus}> - </button>
          <span> {count} </span>
          <button onClick={handlePlus}> + </button>
        </div>
      )}

      <button className="red" onClick={() => changeColor("red")}>
        Red
      </button>
      <button className="green" onClick={() => changeColor("green")}>
        Green
      </button>
      <button className="blue" onClick={() => changeColor("blue")}>
        Blue
      </button>
    </div>
  );
}
