import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = function() {
    return (
        <React.StrictMode>
            <div>
                <header>
                    <Link to="/">Adopt me!</Link>
                </header>
                <Router>
                    <SearchParams path="/" />
                    <Details path="/details/:id" />
                </Router>
            </div>
        </React.StrictMode>
    );
};

render(React.createElement(App), document.getElementById("root"));
