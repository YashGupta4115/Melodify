import React, { useContext } from "react";
import "./AlbumTracks.css";
import { FaSpotify } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { albums } from "../../Assests/data/data.js";
import { useContextCon } from "../../Context/context.jsx";
import { TrackTitleAuthor } from "../../Components/DashBoardFooter/DashBoardFooter.jsx";
import { PlayerContext } from "../../Context/playerContext.jsx";

const AlbumTracks = () => {
  const { albumId } = useParams();
  const { mainWidth } = useContextCon();
  let width = 120.2;
  let height = 120.2;
  let size = 37.5;
  if (mainWidth > 600) {
    width = mainWidth * 0.2;
    height = mainWidth * 0.2;
    size = mainWidth / 16;
  }
  if (mainWidth > 1000) {
    size = 60;
  }
  const album = albums[albumId - 1];
  const { setTrack } = useContext(PlayerContext);

  const trackChangeHandler = (song) => {
    setTrack(song);
  };

  return (
    <div className="album-tracks">
      <div className="tracks-page-album-header">
        <div className="tracks-page-album-image">
          <img
            style={{
              width: width,
              height: height,
              maxWidth: "236.8px",
              maxHeight: "236.8px",
              minHeight: "120.2px",
              minWidth: "120.2",
            }}
            src={album.albumImage}
            alt="albumId"
          />
        </div>
        <div className="tracks-page-album-details">
          <span className="album-type">Playlist</span>
          <span style={{ fontSize: size }} className="tracks-page-album-title">
            {album.title}
          </span>
          <span
            style={{ fontSize: size / 3 }}
            className="tracks-page-album-desp"
          >
            {album.description}
          </span>
          <div style={{ fontSize: size / 3.5 }} className="album-stats">
            <div className="album-artist-logo">
              <FaSpotify />
              <span>{album.artist}</span>
            </div>
            <LuDot />
            <span>{album.saves} saves</span>
            <LuDot />
            <span>{album.songsCount} songs</span>
            <LuDot />
            <span>{album.duration}</span>
          </div>
        </div>
      </div>
      <div className="tracks-page-tracks-container">
        <div className="tracks-page-track-container-header">
          <span style={{ textAlign: "left" }}>#</span>
          <span style={{ textAlign: "left" }}>Title</span>
          <span style={{ textAlign: "left" }}>Album</span>
          <span style={{ textAlign: "left" }}>Date Added</span>
          <span style={{ textAlign: "left" }}>Duration</span>
        </div>
        <hr style={{ marginBottom: "1rem" }} />
        {album.songs.map((song, index) => (
          <div
            key={song.id}
            className="track-container"
            onClick={() => trackChangeHandler(song)}
          >
            <span>{index + 1}</span>
            <div className="track-title-container">
              <TrackTitleAuthor
                title={song.title}
                artist={song.artist}
                trackImage={song.trackImage}
                album="blank"
              />
            </div>
            <span>{song.album}</span>
            <span>{song.dateAdded}</span>
            <span>{song.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumTracks;
