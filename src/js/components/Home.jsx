import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import CardGroup from "./CardGroup";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <CardGroup />
      </div>
      <Footer />
    </div>
  );
};

export default App;
