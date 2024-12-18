// ! как создать React компонент?

// 1. файл называется с большой буквы
// 2. имеет расширение .jsx
// 3. внутри есть функция, у которой в return верстка
// 4. функция называется именем файла, с большой буквы
// 5. функция экспортируется из файла

// импортировали отдельный css файл
import "./lesson01.css";
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg"; // подгрузили картинку

function Lesson01() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Anton + React</h1>
      <div className="card">
        <p>
          File to edit: <code>src/Lesson01.jsx</code>
        </p>
      </div>
    </>
  );
}

export default Lesson01;
