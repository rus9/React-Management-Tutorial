import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "상훈",
    birthday: "9218594",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "광석",
    birthday: "6244552",
    gender: "남자",
    job: "직딩",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "토영",
    birthday: "115433",
    gender: "여자",
    job: "카수",
  },
];
class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              name={c.name}
              image={c.image}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
