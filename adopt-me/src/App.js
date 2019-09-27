import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

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
      <Pet name="Baby" animal="Dog" breed="Yorkie"/>
      <Pet name="Sheldon" animal="Dog" breed="Mix"/>
      <Pet name="Huey" animal="Dog" breed="Mix"/>
    </div>
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));