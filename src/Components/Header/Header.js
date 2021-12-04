/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.png";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Look } from "../../assets/look.png";
import "./header.css";
const Header = ({ history, isLogged }) => {
  const handleClick = () => {
    history.push("/");
    isLogged(false);
  };
  return (
    <nav>
      <div className="div-header">
        <div className="div-png">
          <Logo />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <NavLink to="/" activeClassName="active">
            <Home className="div-png" />
          </NavLink>
          <NavLink to="/look" activeClassName="active">
            <Look className="div.png" />
          </NavLink>
          <button className="button-header" onClick={handleClick}>
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
