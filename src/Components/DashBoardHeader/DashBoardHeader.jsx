import React, { useEffect, useRef, useState, useCallback } from "react";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderRight from "./HeaderRight/HeaderRight";
import { useContextCon } from "../../Context/context";
import "./HeaderMiddle/DashBoardHeader.css";

const DashBoardHeader = () => {
  const refSlider1 = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [, setPosition] = useState({ x: 0, y: 0 });
  const { setShift } = useContextCon();

  const handleMouseDown = useCallback((e) => {
    setIsResizing(true);
    setPosition({
      x: e.clientX - refSlider1.current.offsetLeft,
      y: e.clientY - refSlider1.current.offsetTop,
    });
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isResizing) {
        const newX = e.clientX - refSlider1.current.offsetLeft;
        const newY = e.clientY - refSlider1.current.offsetTop;
        setPosition({
          x: newX,
          y: newY,
        });
        setShift(newX);
      }
    },
    [isResizing, setShift]
  );

  const handleMouseUp = useCallback(() => {
    if (isResizing) {
      setIsResizing(false);
    }
  }, [isResizing]);

  useEffect(() => {
    if (isResizing) {
      const handleMouseMoveWindow = (e) => handleMouseMove(e);
      const handleMouseUpWindow = (e) => handleMouseUp(e);

      window.addEventListener("mousemove", handleMouseMoveWindow);
      window.addEventListener("mouseup", handleMouseUpWindow);

      return () => {
        window.removeEventListener("mousemove", handleMouseMoveWindow);
        window.removeEventListener("mouseup", handleMouseUpWindow);
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp]);

  return (
    <div className="DashBoard-header">
      <HeaderLeft />
      <div
        onMouseDown={handleMouseDown}
        className="slider"
        ref={refSlider1}
      ></div>
      <HeaderMiddle />
      <div className="slider"></div>
      {false && <HeaderRight />}
    </div>
  );
};

export default DashBoardHeader;
