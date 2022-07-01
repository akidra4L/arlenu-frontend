import { Dropdown, Navbar } from "flowbite-react";
import { BrowserRouter as Router, Link, useRoutes } from "react-router-dom";

import IconProfile from "../../icons/profile";

import Main from "../content/main";
import Add from "../content/main-add";
import FAQ from "../content/main-faq";
import MyProjects from "../content/my-projects";
import { NavbarCollapse } from "./NavbarCollapse";

import { useWindowSize } from "../../utils/useWindowSize";

const NavBarLinks = () => {
  let routes = useRoutes([
    { path: "/projects", element: <Main /> },
    { path: "/add", element: <Add /> },
    { path: "/faq", element: <FAQ /> },
    { path: "/my-projects", element: <MyProjects /> },
  ]);
  return routes;
};

export const NavBar = () => {
  const currentWindowSize = useWindowSize();

  return (
    <Router>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <div className="flex flex-row">
            <span className="p-5 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              <a style={{ fontSize: "50px" }}>
                <Link to="/projects">ärlenu</Link>
              </a>
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        {currentWindowSize.width >= 720 && <NavbarCollapse />}

        <div className="flex md:order-2 p-5">
          <Dropdown inline={true} label={<IconProfile alt="User settings" />}>
            <Dropdown.Header className="py-3 px-4">
              <span className="block text-sm text-gray-900 dark:text-white">
                Alikhan Gubayev
              </span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                name@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to="/my-projects">Мои проекты</Link>
            </Dropdown.Item>
            <Dropdown.Item>Выйти</Dropdown.Item>
          </Dropdown>
        </div>
        {currentWindowSize.width < 720 && <NavbarCollapse />}
      </Navbar>
      <NavBarLinks />
    </Router>
  );
};
