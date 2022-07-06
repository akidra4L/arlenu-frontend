import { Navbar } from "flowbite-react";
import { NavLink, Link } from "react-router-dom";

export const NavbarCollapse = () => {
  return (
    <Navbar.Collapse>
      <Link to="/">
        <Navbar.Link href="#">
          <span className="collapse-text">проекты</span>
        </Navbar.Link>
      </Link>
      <Link to="/add">
        <Navbar.Link href="#">
          <span className="collapse-text">добавить</span>
        </Navbar.Link>
      </Link>
      <Link to="/faq">
        <Navbar.Link href="#">
          <span className="collapse-text">faq</span>
        </Navbar.Link>
      </Link>
    </Navbar.Collapse>
  );
};
