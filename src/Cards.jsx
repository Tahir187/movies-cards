import React from "react";
import NetflixCard from "./NetflixCard";
import AmazonCard from "./AmazonCard";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <main>
        <h1>Movies Cards</h1>
        <div className="cards">
          <Link to="/netflix">
            <NetflixCard />
          </Link>
          <Link to="/amazon">
            <AmazonCard />
          </Link>
        </div>
        <button onClick={handleGoBack}> Go Back </button>
      </main>
      {/* <h1>Cards</h1> */}
    </>
  );
};

export default Cards;
