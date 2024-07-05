import { createContext, useRef, useState } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null);
  const seekBarRef = useRef(null);
  const seekBgRef = useRef(null);

  const defaultTrack = {
    title: "null",
    artist: "null",
    trackImage: "",
    album: "",
    addTrackVisible: true,
  };

  const [track, setTrack] = useState(defaultTrack);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      seconds: 0,
      minute: 0,
    },
    totalTime: {
      seconds: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const contextValue = {
    audioRef,
    seekBarRef,
    seekBgRef,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
