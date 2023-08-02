import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - RestaurantCard
 *      - Image
 *      - Name of Restaurant, Star Rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png"
          alt="food app logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resName, cuisine } = props;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src="https://b.zmtcdn.com/data/dish_photos/696/0d09830134d77cf8cb7f913cb3de1696.jpg"
        alt="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>20 mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Dizwwy Foods" cuisine="Chinese foods" />
        <RestaurantCard resName="KFC" cuisine="Fast Foods" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
