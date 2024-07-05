import React from "react";
import Albums from "../../../Components/Albums/Albums";
// import { useGetTracksQuery } from "../../../Reducer/spotifyCore";
import { albums } from "../../../Assests/data/data.js";
import "./Home.css";

const Home = () => {
  // const { data, isFetching, error } = useGetTracksQuery();
  return (
    <div className="home-container">
      <div className="albums-container">
        <Albums title={"Bollywood"} albums={albums} />
        <Albums title={"Bollywood"} albums={albums} />
      </div>
    </div>
  );
};

export default Home;
