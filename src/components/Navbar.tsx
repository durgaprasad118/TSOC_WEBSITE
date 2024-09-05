import { useState } from 'react';
import logo from '../assets/Logo.svg';
import RightCWhite from '../assets/rightCWhite.svg';
import Button from './ui/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const closeNavbarOnClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-white border-gray-200 top-0 fixed w-[100vw] md:h-[100px] h-[60px] z-20">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src={logo} className="h-8" alt="Logo" />
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    onClick={toggleNavbar}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        isOpen ? 'block' : 'hidden'
                    } w-full md:block md:w-auto z-50`}
                    id="navbar-default"
                >
                    <ul className="font-medium font-baiJamjuree text-[14px] flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a
                                href="#Story"
                                className="block py-2 px-3   rounded md:bg-transparent hover:text-blue-700 md:p-0"
                                aria-current="page"
                                onClick={closeNavbarOnClick}
                            >
                                Mentors
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Working"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                onClick={closeNavbarOnClick}
                            >
                                How it works
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                onClick={closeNavbarOnClick}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                onClick={closeNavbarOnClick}
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Benefits"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                onClick={closeNavbarOnClick}
                            >
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                onClick={closeNavbarOnClick}
                            >
                                Code of Conduct
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Form"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                onClick={closeNavbarOnClick}
                            >
                                Hire From Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:block hidden">
                    <Button className="flex items-center justify-center gap-2 ">
                        Apply now
                        <span>
                            <img
                                src={RightCWhite}
                                className="text-white"
                                alt=""
                            />
                        </span>
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
