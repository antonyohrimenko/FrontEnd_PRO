// Используем хуки
import "./lesson04.css";
import { useState } from "react";

export default function Lesson04() {
  // Этот бы код сработал бы в JS, но не в React
  //   let count = 1;

  // const handlePlus = () => {
  //   count++;
  //   console.log(count);
  // };

  // Поэтому нужно использовать Хуки состояния (переменную)

  //   const result = useState(1);
  //   console.log(result); // проверили что в ответ приходит массив
  //   const count = result[0];

  const [count, setCount] = useState(1);
  // 1) переменная состояния
  // 2) переменная функции которая изменяет это состояние setCount

  const handlePlus = () => {
    // вызовем фукнцию и пропишем что мы хотим получить
    // получить мы хотим предыдущую значение + 1
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };

  // поиграемся с белевыми состояниями в хуках (которая скрывала бы каунтер)
  // реализуем кнопку переключатель для того, чтобы спрятать или показывать наш счетчик

  const [isVisible, setIsVisible] = useState(false);
  const handleSwitcher = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <h2>UseStete() Hook 🦦 🪝</h2>
      <p>
        {" "}
        Чтобы при изменении переменной как в примере ниже мы видели результат
        обновления не достаточно обычноый переменной. Нужно использовать
        специальную переменную состояния. UseState() из React библиотеки.
      </p>
      <div>
        <button onClick={handleSwitcher}>
          {" "}
          👉 {isVisible ? "Hide counter" : "Show counter"} 👈{" "}
        </button>
      </div>

      {/* Если в левой части будет true то отобрази то что после &&  */}
      {isVisible && (
        <div className="counter">
          <p>Этот счетчик сделан с помощью UseState()</p>
          <button onClick={handleMinus}> - </button>
          <span> {count} </span>
          <button onClick={handlePlus}> + </button>
        </div>
      )}

      <button> Red </button>
      <button> Green </button>
      <button> Blue </button>

    </div>
  );
}
