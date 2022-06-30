import { Dropdown, Navbar } from "flowbite-react";

import IconProfile from "../../icons/profile";

export const NavBar = () => {
    return (
        <Navbar 
            fluid={true}
            rounded="true"
        >
            <Navbar.Brand>
                <span className="p-5 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                    <a href="#" style={{"fontSize": "50px"}}>
                        ärlenu
                    </a>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#">
                    <span className="text-2xl">главная</span>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <span className="text-2xl">проекты</span>
                </Navbar.Link>
                <Navbar.Link href="#">
                    <span className="text-2xl">faq</span>
                </Navbar.Link>
            </Navbar.Collapse>
            <div className="flex md:order-2 p-5">
                <Dropdown
                    // arrowIcon={false}
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
                        Мои проекты
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Добавить проект
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Выйти
                    </Dropdown.Item>
                </Dropdown>
            </div>
        </Navbar>
    )
}