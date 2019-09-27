import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, { 
  //     name: "Baby", 
  //     animal: "Dog", 
  //     breed: "Yorkie" }),
  //   React.createElement(Pet, {
  //     name: "Sheldon",
  //     animal: "Dog",
  //     breed: "Mixed"
  //   }),
  //   React.createElement(Pet, { 
  //     name: "Huey", 
  //     animal: "Dog", 
  //     breed: "Mixed" })
  // ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  )
};

render(<App />, document.getElementById("root"));