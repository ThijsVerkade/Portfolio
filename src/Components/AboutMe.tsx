import { RiLinkedinFill, RiGithubLine } from '@remixicon/react';
import React from "react";
const AboutMe = () => {
    return (
        <div id="aboutme" className="mt-10 max-w-4xl mx-auto px-8 py-6 space-y-6 flex sm:flex-col lg:flex-row sm:justify-center lg:justify-start bg-backgroundSecondary">
            <div className="flex flex-col space-y-2 sm:space-y-4 lg:space-y-2">
                <div className="w-36 h-36 rounded-full overflow-hidden border border-primary p-3">
                    <img src="yourImageUrl" alt="Profile" className="h-full w-full object-cover" />
                </div>
                <div className="flex space-x-8 justify-between sm:justify-center rounded bg-primary ">
                    <a href="#" className="w-12 h-12 p-3 flex items-center justify-center">
                        <RiLinkedinFill className="h-6 w-6 text-gray-100" />
                    </a>
                    <a href="#" className="w-12 h-12 p-3 flex items-center justify-center">
                        <RiGithubLine className="h-6 w-6 text-gray-100"/>
                    </a>
                </div>
            </div>
            <div className="flex flex-col text-xl space-y-2 sm:pl-0 lg:pl-12 text-gray-100 text-left">
                <h2 className="text-2xl  font-bold">About Me</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Our platform offers accessible, interactive and easy-to-understand programming lessons that make
                    learning code a breeze!
                </p>
            </div>
        </div>
    );
};
export default AboutMe;