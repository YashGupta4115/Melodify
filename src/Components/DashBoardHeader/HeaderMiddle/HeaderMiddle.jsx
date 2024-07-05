import React, { useEffect, useRef, useState } from "react";
import { useContextCon } from "../../../Context/context";
import { Route, Routes } from "react-router-dom";
import "./DashBoardHeader.css";
import Home from "../../../routes/Recommended/Home/Home";
import Library from "../../../routes/Recommended/Library/Library";
import Stream from "../../../routes/Recommended/Stream/Stream";
import Radio from "../../../routes/Recommended/Radio/Radio";
import LikedTracks from "../../../routes/MyMusic/LikedTracks/LikedTracks";
import Albums from "../../../routes/MyMusic/Albums/Albums";
import Artists from "../../../routes/MyMusic/Artists/Artists";
import History from "../../../routes/MyMusic/History/History";
import Downloads from "../../../routes/MyMusic/Downloads/Downloads";
import TopCharts from "../../../routes/Playlists/TopCharts/TopCharts";
import LastestReleases from "../../../routes/Playlists/LastestRelease/LastestReleases";
import ArtistsAll from "../../../routes/Playlists/ArtistsAll/ArtistsAll";
import AlbumTracks from "../../../routes/AlbumTracks/AlbumTracks";

const HeaderMiddle = () => {
  const refHeaderMiddle = useRef(null);
  const [width, setWidth] = useState(58);
  const { shift, setMainWidth } = useContextCon();

  useEffect(() => {
    const conputedStyle = getComputedStyle(refHeaderMiddle.current);
    setWidth(parseInt(conputedStyle.width) - shift);
    setMainWidth(parseInt(conputedStyle.width) - shift);
  }, [shift, setMainWidth]);
  return (
    <div
      ref={refHeaderMiddle}
      style={{ width: `${width}%` }}
      className="inner-header-components inner-header-components-middle"
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommended">
          <Route path="/recommended/library" element={<Library />} />
          <Route path="/recommended/stream" element={<Stream />} />
          <Route path="/recommended/radio" element={<Radio />} />
        </Route>

        <Route path="/my-music">
          <Route path="/my-music/liked-tracks" element={<LikedTracks />} />
          <Route path="/my-music/albums" element={<Albums />} />
          <Route path="/my-music/artists" element={<Artists />} />
          <Route path="/my-music/history" element={<History />} />
          <Route path="/my-music/downloads" element={<Downloads />} />
        </Route>
        <Route path="/playlists">
          <Route path="/playlists/top-charts" element={<TopCharts />} />
          <Route
            path="/playlists/lastest-releases"
            element={<LastestReleases />}
          />
          <Route path="/playlists/all-artists" element={<ArtistsAll />} />
          <Route path="/playlists/:albumId" element={<AlbumTracks />} />
        </Route>
      </Routes>
    </div>
  );
};

export default HeaderMiddle;
