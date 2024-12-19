import MyButton from "../../components/myButton/MyButton";

function Lesson02() {
  const element = <h4> Это JSX из переменной element </h4>;
  const text = "А это строка из переменной текст";

  const react = {
    developer: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  };

  function ShowDeveloper(obj) {
    return "Developer (from function): " + obj.developer;
  }

  return (
    <div>
      {element}
      <p>
        В JSX мы можем пользоваться динамическими данными, которые приходят из
        тела react компонента или других файлов:
      </p>
      <p>{text} </p>

      <h2> JSX Component 🦦 </h2>
      <p> Это вычисление случилось в JSX: {22 + 44}</p>
      <img width={"100px"} src={react.logo} alt="react.logo" />
      <p>React developer: {react.developer}</p>
      <p>{ShowDeveloper(react)}</p>

      <h4> Это пример переиспользуемости компонентов: </h4>
      <MyButton />
      <MyButton />
    </div>
  );
}

export default Lesson02;
