import React, { useState } from 'react';
import { RiMoonLine, RiSunLine } from '@remixicon/react';


const HeaderComponent = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeChange = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className="fixed inset-x-4 top-0 p-5 bg-backgroundPrimary border-gray-600 mt-4 rounded-l flex justify-between items-center z-10 ">
            <div className="text-backgroundSecondary">
                <h1 className="font-bold text-4xl">Logo</h1>
            </div>
            <ul className="flex items-center space-x-5 text-secondarys">
                <li className="hover:opacity-100 opacity-100">Home</li>
                <li className="hover:opacity-100 opacity-50">About</li>
                <li className="hover:opacity-100 opacity-50">Contact</li>
            </ul>
            <div className="flex items-center space-x-4">
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle" className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white appearance-none cursor-pointer ${darkMode && "right-0 border-green-200 bg-green-500"}`} onChange={handleDarkModeChange} />
                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
                <label htmlFor="toggle" className="text-secondary text-sm mr-3">{darkMode ? <RiSunLine/> : <RiMoonLine/>}</label>
                <button className="bg-transparent border-secondary border-2 hover:bg-backgroundSecondary hover:text-primary text-secondary font-bold py-2 px-4 rounded">
                    Contact Me
                </button>
            </div>
        </header>
    )
}

export default HeaderComponent;