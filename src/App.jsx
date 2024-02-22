import "./user.css";
import user from "./user.json";
//import data from "./user.json" assert { type: "json" };
import UserCard from "./UserCard";

function App() {
  // const data = JSON.stringify(user);
  // console.log(data);
  // console.log(user);
  // console.log(user.name);
  // console.log(user.age);
  // console.log(user.phoneNumber);
  // console.log(user.address);

  return (
    <>
      {/* <h1>{data}</h1> */}
      <UserCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
    </>
  );
}

export default App;
