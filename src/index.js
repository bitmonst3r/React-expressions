import React from "react";
import ReactDOM from "react-dom";

//Adding variables into the html thats inside js
const fname = "Debbie";
const lname = "Meda";
const number = 24;
ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your lucky number is {number}.</p>
    <p>
      You can also add numbers within braces {14 + 10} It can take any js
      expression
    </p>
    <p>For example you can also do this {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
