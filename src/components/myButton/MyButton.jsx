// Пример отдельного компонента кнопки
// Экспорт написан перед обьявление функции
// Урок 3 делаем переиспользуемую кнопку (шаблон)
import "./MyButton.css";

export default function MyButton({ type, func, text }) {
  return (
    <button type={type} onClick={func} className="button">
      {text}
    </button>
  );
}
