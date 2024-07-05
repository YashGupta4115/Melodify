import React from "react";
import "./Tracks.css";

const Tracks = ({ track }) => {
  return (
    <div className="individual-track">
      {track.map((key) => {
        return (
          <div key={key.id} className="track-info">
            <img className="track-image" src={key.coverImage} alt={key.title} />
            <div className="track-descp">
              <span className="track-title">{key.title}</span>
              <p>{key.artist}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tracks;
