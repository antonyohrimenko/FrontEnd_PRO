import { fellowship } from "./ fellowship";
import "./lesson05.css";

export default function Lesson05() {
  console.log(fellowship);
  return (
    <div>
      <h2>React Map() components 🧝🏻‍♀️ </h2>
      {fellowship.map((hero, index) => (
        // key - это начальное значение которое просит передать React в
        // итерируемую верстку, для того чтобы не ошибиться в отрисовке
        // при сложных операциях (например сортировка или удаление)
        <div className="heroCard" key={index}>
          <p> Hero: {hero.name}</p>
          <p> Age: {hero.age} y.o</p>
        </div>
      ))}
    </div>
  );
}
