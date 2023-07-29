
const heading = React.createElement("h1", { id: "key" }, "Hello everyone!");

const h1 = React.createElement(
  "h1",
  { style: { color: "pink" }, id: "key" },
  "I am pink"
);

const h2 = React.createElement(
  "h2",
  { style: { color: "skyblue" }, id: "key" },
  "I am skyblue"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  h1,
  h2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);