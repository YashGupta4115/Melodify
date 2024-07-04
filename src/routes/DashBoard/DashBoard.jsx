import React from "react";
import "./DashBoard.css";
import DashBoardHeader from "../../Components/DashBoardHeader/DashBoardHeader";
import DashBoardFooter from "../../Components/DashBoardFooter/DashBoardFooter";

const DashBoard = () => {
  return (
    <div className="DashBoard-container" style={{ height: "100vh" }}>
      <DashBoardHeader />
      <DashBoardFooter />
    </div>
  );
};

export default DashBoard;
