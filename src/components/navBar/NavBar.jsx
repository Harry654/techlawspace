import "./NavBar.css";
import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

// const NavigationDrawer = () => {

// 	return (

//   );
// };

function NavBar({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    const mode = !isOpen ? "open" : "closed";
    setIsOpen(!isOpen);
    // if (mode === "open") {
    //   document.body.classList.add("no-scroll");
    // } else {
    //   document.body.classList.remove("no-scroll");
    // }
  };

  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile, isOpen);
  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  function getPage(test) {
    if (test === currentPage) return { borderBottom: "3px solid #ac8074" };
    return {};
  }
  //   return <NavigationDrawer />
  return (
    <>
      <header className="site-header navbar">
        <div className="container">
          <Link to="/" id="branding">
            <img
              src={logo}
              alt="Tech Law Space logo"
              className="logo"
              style={{ height: "50px", width: "50px" }}
            />
            <div className="branding-copy">
              <h1 className="site-title">Tech Law Space</h1>
              <small className="site-description">
                Where <b>Tech</b> meets <b>Law</b>
              </small>
            </div>
          </Link>

          <nav className="main-navigation">
            {isMobile && !isOpen && (
              <button
                type="button"
                className="menu-toggle"
                onClick={toggleDrawer}
              >
                <i className="fa fa-bars"></i>
              </button>
            )}
            <ul className="menu">
              <li className="menu-item">
                <Link to="/" style={getPage("home")}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/about" style={getPage("about")}>
                  About Us
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/our-team" style={getPage("our-team")}>
                  Our Team
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/publications" style={getPage("publications")}>
                  Publications
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="mobile-navigation"></nav>
        </div>
      </header>
      <div className="top-margin"></div>

      {isMobile && (
        <>
          <nav className={`navigation__drawer ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="menu-toggle times"
              onClick={toggleDrawer}
            >
              <i className="fa fa-times"></i>
            </button>
            <ul className="menu">
              <li className="menu-item">
                <Link to="/" style={getPage("home")}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/about" style={getPage("about")}>
                  About Us
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/our-team" style={getPage("our-team")}>
                  Our Team
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/publications" style={getPage("publications")}>
                  Publications
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default NavBar;
