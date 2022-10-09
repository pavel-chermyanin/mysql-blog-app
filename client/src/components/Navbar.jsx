import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenProfile, setOpenProfile] = useState(false);
  const menuRef = useRef();
  const catRef = useRef();

  const menuProfileRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (
        (!menuRef.current?.contains(e.target) && e.target !== catRef.current) ||
        e.target.classList.value === "cat-title"
      ) {
        setOpenMenu(false);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const handleMenu = (e) => {
      if (window.innerWidth > 768) {
        setOpenMenu(true);
      } else {
        setOpenProfile(false);
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleMenu);
    return () => {
      window.removeEventListener("resize", handleMenu);
    };
  }, []);
  useEffect(() => {
    const handleProfile = (e) => {
      if (
        (!menuProfileRef.current?.contains(e.target) &&
          e.target !== profileRef.current) ||
        e.target.classList.value === "profile-item"
      ) {
        setOpenProfile(false);
      }
    };
    document.body.addEventListener("click", handleProfile);
    return () => {
      document.body.removeEventListener("click", handleProfile);
    };
  }, []);


  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <div
            ref={catRef}
            className="mobile-categories"
            onClick={(e) => {
              e.preventDefault();
              setOpenMenu((prev) => !prev);
            }}
          >
            Category
          </div>
          {isOpenMenu && (
            <div tabIndex={1} ref={menuRef} className="links__wrapper">
              <Link to="/?cat=art" className="link">
                <h6 className="cat-title">ART</h6>
              </Link>
              <Link to="/?cat=science" className="link">
                <h6 className="cat-title">SCIENCE</h6>
              </Link>
              <Link to="/?cat=technology" className="link">
                <h6 className="cat-title">TECHNOLOGY</h6>
              </Link>
              <Link to="/?cat=cinema" className="link">
                <h6 className="cat-title">CINEMA</h6>
              </Link>
              <Link to="/?cat=food" className="link">
                <h6 className="cat-title">FOOD</h6>
              </Link>
            </div>
          )}

          <div className="mobile-profile">
            <p
              ref={profileRef}
              onClick={() => {
                setOpenProfile((prev) => !prev);
              }}
            >
              {currentUser?.username}
            </p>
            {isOpenProfile && (
              <div ref={menuProfileRef} className="mobile-drop profile-item">
                <Link className="link" to="/login">
                  Login
                </Link>
                <p className="profile-item">{currentUser?.username}</p>
              </div>
            )}
          </div>
          {currentUser ? (
            <span className="logout" onClick={logout}>
              Logout
            </span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
