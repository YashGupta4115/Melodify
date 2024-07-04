import React from "react";
import Albums from "../../../Components/Albums/Albums";
// import { useGetTracksQuery } from "../../../Reducer/spotifyCore";
import { bollywoodAlbums } from "../../../Assests/data/data.js";

const Home = () => {
  // const { data, isFetching, error } = useGetTracksQuery();
  return (
    <div className="home-container">
      <div className="albums-container">
        {Object.keys(bollywoodAlbums).map((album) => {
          return (
            <div key={album}>
              <span>{album}</span>
              <Albums album={bollywoodAlbums[album]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
