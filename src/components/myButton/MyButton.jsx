// Пример отдельного компонента кнопки
// Экспорт написан перед обьявление функции

// Урок 3 делаем переиспользуемую кнопку (шаблон)
export default function MyButton(props) {
  return <button onClick={props.func}>{props.text}</button>;
}
