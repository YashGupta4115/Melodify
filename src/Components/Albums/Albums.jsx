import React from "react";
import "./Albums.css";

const Albums = ({ album }) => {
  return (
    <div className="individual-album">
      {album.map((key) => {
        return (
          <div key={key.id} className="album-info">
            <img className="album-image" src={key.coverImage} alt={key.title} />
            <div className="album-descp">
              <span className="album-title">{key.title}</span>
              <p>{key.artist}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Albums;
