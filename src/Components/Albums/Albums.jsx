import React from "react";
import { useContextCon } from "../../Context/context";
import "./Albums.css";
import { useNavigate } from "react-router-dom";
// import IndividualAlbums from "../IndividualAlbum/IndividualAlbum";

const Albums = ({ albums, title }) => {
  const navigate = useNavigate();
  const { mainWidth } = useContextCon();
  let width = 121;
  let height = 121;
  if (mainWidth > 600) {
    width = mainWidth * 0.2;
    height = mainWidth * 0.2;
  }
  return (
    <div className="album-container">
      <div className="album-title-more">
        <span>{title}</span>
        <span>see more</span>
      </div>
      <div className="individual-album">
        {albums.map((album) => {
          return (
            <div
              className="album-info"
              key={album.id}
              onClick={() => navigate(`/playlists/${album.id}?`)}
            >
              <span>
                <img
                  className="album-image"
                  style={{ width: width, height: height }}
                  src={album.albumImage}
                  alt={album.title}
                />
              </span>
              <div className="album-title-desp">
                <span className="album-title">{album.title}</span>
                <span className="album-descp">{album.description}</span>
                {/* <IndividualAlbums album={albums[album]} /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
