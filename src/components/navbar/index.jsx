import { useState, useEffect, useContext } from "react";
import { Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { AuthContext, TokenContext } from "../../context/AuthContext";
import { NavbarCollapse } from "./NavbarCollapse";
import { useWindowSize } from "../../functions/useWindowSize";
import IconProfile from "../../icons/profile.js";
import { removeTokenCookies } from "../../utils/tokenCookies";
import jwt_decode from "jwt-decode";

export const NavBar = () => {
  const { isAuth } = useContext(AuthContext);
  const { token } = useContext(TokenContext);
  const currentWindowSize = useWindowSize();

  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("token"));
    if (!userData) {
      console.log("User is not registered.");
    } else {
      // console.log("jwt_decode: ", jwt_decode(JSON.stringify(userData)));
      setUser(jwt_decode(JSON.stringify(userData)));
    }
  }, []);

  const signOut = () => {
    removeTokenCookies();
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="nav">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand className="nav-logo">
          <div className="nav-logo-wrapper flex flex-row">
            <span className="nav-logo-wrapper-text text">
              <a href="#" className="text-link">
                <Link to="/">ärlenu</Link>
              </a>
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        {currentWindowSize.width >= 720 && <NavbarCollapse />}

        {isAuth ? (
          <div className="nav-user">
            <Dropdown inline={true} label={<IconProfile alt="User settings" />}>
              <Dropdown.Header className="nav-user-header">
                <span className="nav-user-header-span">{user.nickname}</span>
              </Dropdown.Header>
              <Link to="/my-projects">
                <Dropdown.Item>Мои проекты</Dropdown.Item>
              </Link>
              <Dropdown.Item onClick={signOut}>Выйти</Dropdown.Item>
            </Dropdown>
          </div>
        ) : (
          <div className="nav-user">
            <Dropdown inline={true} label={<IconProfile alt="User settings" />}>
              <Link to="/sign-in">
                <Dropdown.Item>
                  <span className="nav-user-header-span">Войти</span>
                </Dropdown.Item>
              </Link>
              <Link to="/sign-up">
                <Dropdown.Item>
                  <span className="nav-user-header-span">Регистрация</span>
                </Dropdown.Item>
              </Link>
            </Dropdown>
          </div>
        )}

        {currentWindowSize.width < 720 && <NavbarCollapse />}
      </Navbar>
    </header>
  );
};
