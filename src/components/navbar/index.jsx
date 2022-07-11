import { Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

import IconProfile from "../../icons/profile.js";

import { NavbarCollapse } from "./NavbarCollapse";

import { useWindowSize } from "../../functions/useWindowSize";

export const NavBar = () => {
  const currentWindowSize = useWindowSize();

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

        {/* <div className="nav-user">
            <Dropdown inline={true} label={<IconProfile alt="User settings" />}>
              <Dropdown.Header className="nav-user-header">
                <span className="nav-user-header-span">
                  Alikhan Gubayev
                </span>
                <span className="nav-user-header-span lighter">
                  name@gmail.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to="/my-projects">Мои проекты</Link>
              </Dropdown.Item>
              <Dropdown.Item>Выйти</Dropdown.Item>
            </Dropdown>
          </div> */}
        {currentWindowSize.width < 720 && <NavbarCollapse />}
      </Navbar>
    </header>
  );
};
