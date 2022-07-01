import { Dropdown, Navbar } from "flowbite-react";
import { BrowserRouter as Router, Link, useRoutes } from "react-router-dom";

import IconProfile from "../../icons/profile";

import Main from '../content/main';
import Add from "../content/main-add";
import Faq from "../content/main-faq";
import MyProjects from "../content/my-projects";

const NavBarLinks = () => {
    let routes = useRoutes([
        { path: '/projects', element: <Main /> },
        { path: '/add', element: <Add /> },
        { path: '/faq', element: <Faq /> },
        { path: '/my-projects', element: <MyProjects /> },
    ]);
    return routes;
};

export const NavBar = () => {
    return (
        <Router>
            <Navbar 
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <div className="flex flex-row">
                        <span className="p-5 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                            <a style={{"fontSize": "50px"}}>
                                <Link to="/projects">
                                    ärlenu
                                </Link>
                            </a>
                        </span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#">
                        <span className="text-2xl">
                            <Link to="/projects">
                                проекты
                            </Link>
                        </span>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <span className="text-2xl">
                            <Link to="/add">
                                добавить
                            </Link>
                        </span>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <span className="text-2xl">
                            <Link to="/faq">
                                faq
                            </Link>
                        </span>
                    </Navbar.Link>
                </Navbar.Collapse>
                <div className="flex md:order-2 p-5">
                    <Dropdown
                        inline={true}
                        label={<IconProfile alt="User settings" />}
                    >
                        <Dropdown.Header className="py-3 px-4">
                            <span className="block text-sm text-gray-900 dark:text-white">
                                Alikhan Gubayev
                            </span>
                            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                                name@gmail.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <Link to="/my-projects">
                                Мои проекты
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Выйти
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </Navbar>
            <NavBarLinks />
        </Router>
    )
}