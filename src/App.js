import "./App.css";
import React, { Component } from "react";
import Customer from "./components/Customer";

const customers = [
  {
  'id': '1',
  'image': 'https://placeimg.com/64/64/1',
  'name': '어우동',
  'birthday': '9218594',
  'gender': '남자',
  'job': '대학생',
},
{
  'id': '2',
  'image': 'https://placeimg.com/64/64/2y',
  'name': '기라라',
  'birthday': '42448594',
  'gender': '여자',
  'job': '여직생',
},
{
  'id': '1',
  'image': 'https://placeimg.com/64/64/3',
  'name': '너비아니',
  'birthday': '548594',
  'gender': '남자',
  'job': '놈팽이',
}
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {return (
            <Customer 
             key={c.id}
             id={c.id}
             image={c.image}
             name={c.name}
             birthday={c.birthday}
             gender={c.gender}
             job={c.job}
            />
            );
          })
        }
      </div>
      
    );
  }
}

export default App;
