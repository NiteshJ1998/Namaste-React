import React from "react";
import ReactDOM from "react-dom/client";

// # Parcel
// - Dev Build
// - Local Server
// - HMR -> Hot Module Replacement
// - File Watching Algorithms written in C++
// - Caching - Faster Builds
// - Image Optimization
// - Minification
// - Bundling
// - Compress
// - Consitent Hashing
// - Code Splittng
// - Differential Bundling - To support Older Browsers
// - HTTPs
// - Tree Shaking - will remove unused code\
// - Different build for dev and prod bundles

// imported react and reactdom from nodemodule folder
const heading = React.createElement(
  "h1",
  { id: "key" },
  "Hello from Namaste React!"
);

const h1 = React.createElement(
  "h1",
  { style: { color: "purple " }, id: "key" },
  "I am Voilet"
);

const h2 = React.createElement(
  "h2",
  { style: { color: "fuchsia" }, id: "key" },
  "I am pink"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  h1,
  h2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
