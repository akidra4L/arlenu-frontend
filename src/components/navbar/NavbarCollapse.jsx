import { Navbar } from "flowbite-react";
import { NavLink, Link } from "react-router-dom";

export const NavbarCollapse = () => {
  return (
    <Navbar.Collapse>
      <Navbar.Link href="#">
        <span className="collapse-text">
          <Link to="/">проекты</Link>
        </span>
      </Navbar.Link>
      <Navbar.Link href="#">
        <span className="collapse-text">
          <Link to="/add">добавить</Link>
        </span>
      </Navbar.Link>
      <Navbar.Link href="#">
        <span className="collapse-text">
          <Link to="/faq">faq</Link>
        </span>
      </Navbar.Link>
    </Navbar.Collapse>
  );
};
