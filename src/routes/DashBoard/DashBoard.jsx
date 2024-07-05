import React, { useContext, useEffect } from "react";
import "./DashBoard.css";
import DashBoardHeader from "../../Components/DashBoardHeader/DashBoardHeader";
import DashBoardFooter from "../../Components/DashBoardFooter/DashBoardFooter";
import { PlayerContext } from "../../Context/playerContext";
import sampleTrack from "../../Assests/Husn - Anuv Jain.mp3";

const DashBoard = () => {
  const { audioRef, track, setTrack } = useContext(PlayerContext);
  useEffect(() => {
    setTrack(sampleTrack);
  });
  return (
    <div className="DashBoard-container" style={{ height: "100vh" }}>
      <DashBoardHeader />
      <DashBoardFooter />
      <audio ref={audioRef} src={track} preload="auto"></audio>
    </div>
  );
};

export default DashBoard;
