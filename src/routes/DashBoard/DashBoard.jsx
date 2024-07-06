import React, { useContext } from "react";
import "./DashBoard.css";
import DashBoardHeader from "../../Components/DashBoardHeader/DashBoardHeader";
import DashBoardFooter from "../../Components/DashBoardFooter/DashBoardFooter";
import { PlayerContext } from "../../Context/playerContext";

const DashBoard = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="DashBoard-container" style={{ height: "100vh" }}>
      <DashBoardHeader />
      <DashBoardFooter />
      <audio
        ref={audioRef}
        src={track.track}
        // preload="auto"
      ></audio>
    </div>
  );
};

export default DashBoard;
