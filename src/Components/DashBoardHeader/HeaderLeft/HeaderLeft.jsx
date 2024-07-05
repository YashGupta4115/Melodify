import React, { useEffect, useRef, useState } from "react";
import "../HeaderMiddle/DashBoardHeader.css";
import { useContextCon } from "../../../Context/context";
import { SideBarOptions } from "../../../Assests/data/data";
import "./HeaderLeft.css";
import { useNavigate } from "react-router-dom";

const HeaderLeft = () => {
  const navigate = useNavigate();
  const refHeaderLeft = useRef(null);
  const [width, setWidth] = useState(19);
  const { shift } = useContextCon();

  useEffect(() => {
    const conputedStyle = getComputedStyle(refHeaderLeft.current);
    setWidth(parseInt(conputedStyle.width) + shift);
  }, [shift]);

  return (
    <div
      ref={refHeaderLeft}
      className="inner-header-components inner-header-components-left"
      style={{ width: `${width}%` }}
    >
      <h1 style={{ margin: "1rem" }}>Melodify</h1>
      <div className="sidebar-items">
        {Object.keys(SideBarOptions).map((key) => {
          return (
            <div key={key.id} className="sideBarItem-child">
              <span className="sideBarItem-Child-title">{key}</span>
              <div className="sideBarItem-child-items">
                {SideBarOptions[key].map((child) => {
                  return (
                    <div
                      key={key.id}
                      className="sideBarItems-routes"
                      onClick={() => {
                        navigate(child.path);
                      }}
                    >
                      {child.label}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderLeft;
