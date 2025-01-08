// создаем функцию, которая возвращает html фрагмент

function Homework01() {
  return (
    <>
      <div className="profile-card">
        <img
          className="profile-image"
          src="https://avatars.githubusercontent.com/u/81566237?s=400&u=f36f7f6363c7d3a4f641d05323c1f682ec82ebaa&v=4"
          alt="Profile"
        />
        <h2 className="profile-name">Anton Okhrimenko</h2>
        <p className="profile-description">
          Ahoi! Увлекаюсь программированием и путешествиями. После университета
          (специальность: прикладная информатика) так и не реализовал свою мечту
          стать программистом. Ушел в бизнес и реализовал себя там. Сейчас
          появилось свободное время на это и решил поменять сферу деятельности.
          Надеюсь что-то из этого да выйдет и не такой я рукожоп в свои 35 лет
          :)
        </p>
      </div>
    </>
  );
}

export default Homework01;
