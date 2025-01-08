import ProfileCard from "../../components/profileCard/ProfileCard";

export default function Homework02() {
  return (
    <div id="root">
      <ProfileCard
        avatar={
          "https://avatars.mds.yandex.net/i?id=e72bf532899d320bfc9f2ce9f04a57ef_l-5273370-images-thumbs&n=13"
        }
        firstName={"Гендальф"}
        lastName={"Серый"}
        occupation={"Волшебник"}
        hobby={"Наводить суету"}
      />

      <ProfileCard
        avatar={
          "https://cm.author.today/content/2023/03/21/0f692d863c4644b5834fd6ed7a075456.jpg"
        }
        firstName={"Гимли"}
        lastName={"-"}
        occupation={"Гном-гномыч"}
        hobby={"Помогать эльфам"}
      />

      <ProfileCard
        avatar={
          "https://i.pinimg.com/736x/2f/58/ae/2f58aeb94a11e2b6bcf076307362783f.jpg"
        }
        firstName={"Галадриэль"}
        lastName={"-"}
        occupation={"Эльфийка"}
        hobby={"Работа с белым светом"}
      />
    </div>
  );
}
