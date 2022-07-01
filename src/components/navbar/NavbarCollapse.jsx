import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export const NavbarCollapse = () => {
  return (
    <Navbar.Collapse>
      <Navbar.Link href="#">
        <span className="text-2xl">
          <Link to="/projects">проекты</Link>
        </span>
      </Navbar.Link>
      <Navbar.Link href="#">
        <span className="text-2xl">
          <Link to="/add">добавить</Link>
        </span>
      </Navbar.Link>
      <Navbar.Link href="#">
        <span className="text-2xl">
          <Link to="/faq">faq</Link>
        </span>
      </Navbar.Link>
    </Navbar.Collapse>
  );
};
