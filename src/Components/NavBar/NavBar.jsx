import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [list, setList] = useState();

  useEffect(() => {
    setList(document.querySelectorAll(".list"));
  }, []);

  const activeLink = (e) => {
    if (e.target.parentNode.parentNode.classList.contains("list")) {
      list.forEach((item) => item.classList.remove("active"));
      e.target.parentNode.parentNode.classList.add("active");
    }
  };
  return (
    <div className="navigationContainer">
      <ul>
        <li onClick={activeLink} className={"list active"}>
          <Link to={"/"}>
            <span className="icon">
              <ion-icon size="large" name="person-outline"></ion-icon>
            </span>
            <span className="text">contacts</span>
          </Link>
        </li>
        <li onClick={activeLink} className="list">
          <Link to={"/home"}>
            <span className="icon">
              <ion-icon size="large" name="home-outline"></ion-icon>
            </span>
            <span className="text">home</span>
          </Link>
        </li>
        <li onClick={activeLink} className="list">
          <Link to={"/messages"}>
            <span className="icon">
              <ion-icon size="large" name="chatbubble-outline"></ion-icon>
            </span>
            <span className="text">messages</span>
          </Link>
        </li>
        <li onClick={activeLink} className="list">
          <Link to={"/photos"}>
            <span className="icon">
              <ion-icon size="large" name="camera-outline"></ion-icon>
            </span>
            <span className="text">photos</span>
          </Link>
        </li>
        <li onClick={activeLink} className="list">
          <Link to={"/settings"}>
            <span className="icon">
              <ion-icon size="large" name="settings-outline"></ion-icon>
            </span>
            <span className="text">settings</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default NavBar;
