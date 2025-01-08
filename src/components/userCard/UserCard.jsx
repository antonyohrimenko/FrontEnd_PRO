// на место props прийдет обьект, с переданными в родителе данные
// по соответствующим ключам

import MyButton from "../myButton/MyButton";

function UserCard(props) {
  // функция обработчик
  const handleClick = () => {
    alert(`Hallo, ${props.name}!`);
  };

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age} </p>
      <MyButton func={handleClick} text={`Choose... ${props.name}`} />
    </div>
  );
}

export default UserCard;
