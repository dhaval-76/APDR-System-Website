import React from "react";
import { Link } from "react-router-dom";

import analysisImg from "../images/Humaaans - 1 Character.png";
import vehicleHealthImg from "../images/Beep Beep - Medium Vehicle.png";
import chatImg from "../images/Croods - Comments.png";

import Drawer from "./Drawer";

export default function Dashboard() {
  return (
    <>
      <Drawer isHomeScreen={true} />

      <div className="flex-container">
        <Link className="card" to="/analysis">
          <img src={analysisImg} alt="img" />
          <span id="card_footer">Analysis</span>
        </Link>
        <Link className="card" to="/vehicle-health">
          <img src={vehicleHealthImg} alt="img" />
          <span id="card_footer">Vehicle Health</span>
        </Link>
        <Link className="card" to="/chat">
          <div className="chat">
            <img id="chat_img" src={chatImg} alt="img" />
          </div>
          <span id="card_footer">Chat</span>
        </Link>
      </div>
    </>
  );
}
