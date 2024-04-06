import React, { useState } from 'react';

const HeaderComponent = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeChange = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className="fixed inset-x-4 top-0 p-5 bg-gray-800 border-gray-600 mt-4 rounded flex justify-between items-center">
            <div className="text-gray-300">
                <h1 className="font-bold text-4xl">Logo</h1>
            </div>
            <ul className="flex items-center space-x-5 text-gray-300">
                <li className="text-white">Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex items-center space-x-4">
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle" className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white appearance-none cursor-pointer ${darkMode && "right-0 border-green-200 bg-green-500"}`} onChange={handleDarkModeChange} />
                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
                <label htmlFor="toggle" className="text-gray-100 text-sm mr-3">{darkMode ? 'White Mode' : 'Dark Mode'}</label>
                <select name="languages" id="languages" className="bg-gray-200 text-black rounded p-1">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Contact Me
                </button>
            </div>
        </header>
    )
}

export default HeaderComponent;