import React, { useContext } from "react";
import "./DashBoardFooter.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaShuffle } from "react-icons/fa6";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import { TiArrowLoop } from "react-icons/ti";
import { BsFilePlayFill } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { FaRegListAlt } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { AiOutlineSound } from "react-icons/ai";
import { TbWindowMinimize } from "react-icons/tb";
import { FiMaximize2 } from "react-icons/fi";
import { PlayerContext } from "../../Context/playerContext";

export const TrackTitleAuthor = ({
  title,
  trackImage,
  album,
  artist,
  addTrackVisible,
}) => {
  return (
    <div className="footer-left-container">
      <div className="current-track-image-container">
        <img
          className="current-track-image"
          src={trackImage}
          alt="trackImage"
        />
      </div>
      <div className="track-details">
        <span className="track-title">
          {title}
          {`(From ${album})`}
        </span>
        <span className="track-author">{artist}</span>
      </div>
      {addTrackVisible ? <IoMdAddCircleOutline className="footer-icons" /> : ""}
    </div>
  );
};

const DashBoardFooter = () => {
  const { seekBgRef, seekBarRef, playStatus, play, pause, track, time } =
    useContext(PlayerContext);
  return (
    <div className="DashBoard-footer">
      <TrackTitleAuthor
        title={track.title}
        artist={track.artist}
        trackImage={track.trackImage}
        album={track.album}
        addTrackVisible={true}
      />

      <div className="footer-middle-container">
        <div className="player-controls">
          <FaShuffle style={{ fontSize: "14px" }} className="footer-icons" />
          <MdSkipPrevious className="footer-icons" />
          {playStatus ? (
            <FaCirclePause
              style={{ fontSize: "25px" }}
              className="footer-icons"
              onClick={pause}
            />
          ) : (
            <FaCirclePlay
              style={{ fontSize: "25px" }}
              className="footer-icons"
              onClick={play}
            />
          )}
          <MdSkipNext className="footer-icons" />
          <TiArrowLoop className="footer-icons" />
        </div>
        <div className="player-seekbar">
          <span className="runningTime">{`${time.currentTime.minute}:${time.currentTime.seconds}`}</span>
          <div ref={seekBgRef} className="seekbar">
            <hr ref={seekBarRef} className="seekbar-track" />
          </div>
          <span className="stoppingTime">{`${time.totalTime.minute}:${time.totalTime.seconds}`}</span>
        </div>
      </div>

      <div className="footer-right-container">
        <div className="various-controls">
          <BsFilePlayFill className="footer-icons right-icons" />
          <TbMicrophone2 className="footer-icons right-icons" />
          <FaRegListAlt className="footer-icons right-icons" />
          <MdDevices className="footer-icons right-icons" />
          <AiOutlineSound className="footer-icons right-icons" />
          <div className="sound-seekbar">
            <div className="soundbar">
              <hr className="soundbar-track" />
            </div>
          </div>
          <TbWindowMinimize className="footer-icons right-icons" />
          <FiMaximize2 className="footer-icons right-icons" />
        </div>
      </div>
    </div>
  );
};

export default DashBoardFooter;
