import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [colorBtnRed, setColorBtnRed] = useState("btn-danger");
  const [colorBtnYellow, setColorBtnYellow] = useState("btn-warning");
  const [colorBtnGreen, setColorBtnGreen] = useState("btn-success");


function changeColor(color) {
  switch (color) {
    case "red":
      setColorBtnRed("btn-danger active");
      setColorBtnYellow("btn-warning");
      setColorBtnGreen("btn-success");
      break;
    case "yellow":
      setColorBtnRed("btn-danger");
      setColorBtnYellow("btn-warning active");
      setColorBtnGreen("btn-success");
      break;
    case "green":
      setColorBtnRed("btn-danger");
      setColorBtnYellow("btn-warning");
      setColorBtnGreen("btn-success active");
      break;
    default:
      setColorBtnRed("btn-danger");
      setColorBtnYellow("btn-warning");
      setColorBtnGreen("btn-success");
  }
}
  
return (
  <div className="container">
      <div className="pole"></div>
    <div className="traffic-light">
      <div className={"btn " + colorBtnRed} onClick={() => changeColor("red")}></div>
      <div className={"btn " + colorBtnYellow} onClick={() => changeColor("yellow")}></div>
      <div className={"btn " + colorBtnGreen} onClick={() => changeColor("green")}></div>
    </div>
  </div>
);
};

export default Home;
