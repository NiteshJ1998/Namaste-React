import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => HTMLElement(render)

// This is how we create ReactElement using core React
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

console.log(heading);
//JSX - is not HTML in JS
//JSX - HTML-like or XML-like syntax
//JSX - this code is cooler than core react element.
//JSX (Transpiled before it reaches to JS Engine) Transpiled means - this code converted to code that browser can understand indirectly ES6. Transpliled dones by parcel-> Babel
//Babel is javascript compiler.
//Babel convert JSX to react code

//JSX ==> React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

console.log(jsxHeading);
// This is how we create React Element using JSX.

// React Element
const Title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

// React functional Component
// Components Compositions
const HeadingComponent = () => (
  <div id="container">
    {Title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
