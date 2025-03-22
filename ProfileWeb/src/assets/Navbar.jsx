import React, { useState } from 'react'

const Navbar = () =>{
    const [activeSection, setActiveSection] = useState("home");
    const handleNavClick = (section) => {
        setActiveSection(section);
        document.getElementById(section)?.scrollIntoView({ behavior:"smooth"});
    }
    return (
        <>
            <div className="front-sans text-gray-950">
                <nav className="fixed top-0 left-0 w-full flex flex-col md:flex-row justify-between items-center border-2 border-gray-500 p-4 bg-white  z-50">
                    <h1 className="text-2xl font-bold pr-4">Napat</h1>
                    <ul className=" flex items-center list-none gap-2 font-medium text-gray-950 ">
                    <li
                        className={`cursor-pointer px-4 py-2 rounded-full ${
                            activeSection === "home" ? "bg-indigo-200 text-black" : "hover:text-indigo-600"
                        }`}
                        onClick={() => handleNavClick("home")}
                    >
                        Home
                    </li>
                    <li
                        className={`cursor-pointer px-4 py-2 rounded-full ${
                            activeSection === "about" ? "bg-indigo-200 text-black" : "hover:text-indigo-600"
                        }`}
                        onClick={() => handleNavClick("about")}
                    >
                        About me
                    </li>
                    <li
                        className={`cursor-pointer px-4 py-2 rounded-full ${
                            activeSection === "gallery" ? "bg-indigo-200 text-black" : "hover:text-indigo-600"
                        }`}
                        onClick={() => handleNavClick("gallery")}
                    >
                        Gallery
                    </li>
                    </ul>
                    <button className="bg-indigo-900 text-white px-4 py-2 rounded-full shadow-md">Contact</button>
                </nav>
            </div>
        </>
    );
};

export default Navbar