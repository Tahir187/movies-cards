import AmazonComponent from "./AmazonComponent";
import NetflixComponent from "./NetflixComponent";
import "./App.css";
import Cards from "./Cards";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NetflixShowsDetails from "./NetflixShowsDetails";
import { useEffect, useState } from "react";

function App() {
  const [apiRespponse, setResponse] = useState("");
  useEffect( ()=>{
    fetch('http://localhost:8000/moviesRouter');
    .then(res =>res.json());
    .then(res => setResponse(res))
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="homeheading">Movies Cards</h1>} />
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/amazon" element ={<AmazonComponent/>}/>
        <Route path="/netflix" element={<NetflixComponent/>}/>
        <Route path="/netflixdetails" element={<NetflixShowsDetails/>}></Route>
      </Routes>
    </BrowserRouter>
    // <>
    //   <Cards/>
    // </>
  );
}

export default App;
