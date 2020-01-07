const Pet = function({ name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

// App Component
const App = function() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Dorito",
      animal: "Cat",
      breed: "Manx"
    }),
    React.createElement(Pet, {
      name: "Daisy",
      animal: "Dog",
      breed: "Pug"
    }),
    React.createElement(Pet, {
      name: "Charlie",
      animal: "Dog",
      breed: "Pug"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
