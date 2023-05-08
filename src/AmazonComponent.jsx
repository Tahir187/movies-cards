import React from "react";
import { useNavigate } from "react-router-dom";
import "./amazon.css";

const imgUrl1 =
  "https://m.media-amazon.com/images/M/MV5BNDNmNGI2NzAtZjZhYi00YTc1LWJjOTctMTRlMDI0MzEzNjA2XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg";
const imgUrl2 =
  "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg";
const imgUrl3 =
  "https://m.media-amazon.com/images/M/MV5BZGQzODIyNWItZTVmZS00OWJjLThkOTItNjMzNmI4MDU1ZTkzXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_.jpg";

const AmazonComponent = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section>
        <h1>Most watched Amazon Prime Show</h1>
       <div className="card-container">
       <div className="amzonshow">
          {/* show one */}
          <div className="card1">
          <img src={imgUrl1} alt="Jack Ryan" />
          <h4>Jack Ryan</h4>
          </div>
          {/* show two */}
            <div className="card2">
            <img src={imgUrl2} alt="The Boys" />
          <h4>The Boys</h4>
            </div>
          {/* show three */}
            <div className="card3">
            <img src={imgUrl3} alt="The Power" />
          <h4>The Power</h4>
            </div>
        </div>
       </div>
        <button onClick={handleGoBack}> Go Back </button>
      </section>
    </>
  );
};

export default AmazonComponent;
