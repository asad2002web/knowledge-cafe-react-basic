import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between .align-items-center pt-3 pb-2">
      <div className="logo-knowledge">
        <p className="m-0">Knowledge <span className="logo-cafe">Cafe</span></p>
      </div>
      <div className="profile-img">
        <a href="#">
        <img className="img-fluid w-75" src="https://i.ibb.co/XsjFV85/profile.png" alt="logo" />
        </a>
      </div>
    </div>
      <hr className="border-3 my-2"/>
    </>
  );
};

export default Header;
