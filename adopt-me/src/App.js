const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Baby", animal: "Dog", breed: "Yorkie" }),
    React.createElement(Pet, {
      name: "Sheldon",
      animal: "Dog",
      breed: "Mixed"
    }),
    React.createElement(Pet, { name: "Huey", animal: "Dog", breed: "Mixed" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
