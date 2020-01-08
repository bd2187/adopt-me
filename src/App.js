import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
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

render(React.createElement(App), document.getElementById("root"));
