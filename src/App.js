import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = function() {
    return (
        <div>
            <h1>Adopt me!</h1>
            <Pet name="Dorito" animal="Cat" breed="Manx" />
            <Pet name="Daisy" animal="Dog" breed="Pug" />
            <Pet name="Charlie" animal="Dog" breed="Pug" />
        </div>
    );
};

render(React.createElement(App), document.getElementById("root"));
