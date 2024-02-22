import UserCard from "./UserCard";
import "./user.css";
//import data from "./user.json" assert { type: "json" };
import user from "./user.json";

function App() {
  //const data = JSON.stringify(user);
  //console.log(data);
  //console.log(user);
  //console.log(user.name);
  //console.log(user.age);
  //console.log(user.phoneNumber);
  //console.log(user.address);
  //const userArray = Object.keys(user);
  //console.log(userArray);
  //const data = JSON.parse(user);
  //console.log(data[0].name);

  return (
    <>
      <h1>hello123</h1>
      <UserCard
        name="Rakib"
        age="45"
        phoneNumber="256-256-2569"
        address="123 Street NE"   />
    </>
  );
}

export default App;
