import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./netflix.css";
import NetflixShowsDetails from "./NetflixShowsDetails";

const imgUrl1 =
  "https://occ-0-300-38.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV5lteI3eHet1nPBQKC_uEChESjqQfYpRwMWLR0wULt52odnxQtG69JNFDj9N4maZWJWDFZyi2sc1YzZ8mKE4Ajmt7Btva1CnWagGbYXVMp3t4OETM4LwiD70dHu-qWUbBAesQ.jpg?r=c68";
const imgUrl2 =
  "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg";
const imgUrl3 =
  "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg";

const NetflixComponent = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section>

        <h1>Most watched Netflix Shows</h1>
        <div className="card-container">
        <div className="netflixShow">
          {/* show one */}
            <div className="card1">
            <img src={imgUrl1} alt="Stranger Things" />
          <h4>STRANGER THINGS</h4>
          <Link to={`/netflixdetails`}>View Details</Link>
            </div>
          {/* show two */}
            <div className="card2">
            <img src={imgUrl2} alt="The Witcher" />
          <h4>The Witcher</h4>
            </div>
          {/* show three */}
            <div className="card3">
            <img src={imgUrl3} alt="Breaking Bad" />
          <h4>Breaking Bad</h4>
            </div>
        </div>
        </div>
        <button onClick={handleGoBack}> Go Back </button>
      </section>
    </>
  );
};

export default NetflixComponent;
