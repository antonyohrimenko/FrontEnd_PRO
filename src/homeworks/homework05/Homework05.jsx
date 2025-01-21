import React from "react";
import { fellowship } from "./fellowship";
import HeroCard from "./HeroCard";
import "./homework05.css";

export default function Lesson05() {
  return (
    <div>
      <h2>Homework05. Map() + вынос в отдельный компонент 🧝🏻‍♀️</h2>
      <div className="cardContainer">
        {fellowship.map((hero) => (
          <HeroCard key={hero.name} hero={hero} />
        ))}
      </div>
    </div>
  );
}
