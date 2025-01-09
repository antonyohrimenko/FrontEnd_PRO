// Используем хуки

export default function Lesson04() {
  let count = 1;

  const handlePlus = () => {
    count++;
    console.log(count);
  };

  const handleMinus = () => {
    count--;
    console.log(count);
  };

  return (
    <div>
      <h2>UseStete() Hook 🦦 🪝</h2>
      <p> Чтобы при изменении переменной как в примере ниже
        мы видели результат обновления не достаточно обычноый переменной.
        Нужно использовать специальную переменную состояния. 
        UseState() из React библиотеки. 
      </p>
      <button onClick={handleMinus}> - </button>
      <span> {count} </span>
      <button onClick={handlePlus}> + </button>
    </div>
  );
}
