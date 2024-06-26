import React from 'react';
import { RiPhoneLine, RiCodeSSlashLine } from '@remixicon/react';

import Skills from "./Skills";
import ReactLogo from "../assets/images/react-logo.svg";
import JavascriptLogo from "../assets/images/javascript-logo.svg";
import TypescriptLogo from "../assets/images/typescript-logo.svg";
import LaravelLogo from "../assets/images/laravel-logo.svg";
import PhpLogo from "../assets/images/php-logo.svg";
import VuejsLogo from "../assets/images/vuejs-logo.svg";
import SymfonyLogo from "../assets/images/symfony-logo.svg";
import DockerLogo from "../assets/images/docker-logo.svg";
import ExperienceCard from "./ExperienceCard";

const BodyComponent = () => {
    return (
        <div className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-backgroundSecondary">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <RiCodeSSlashLine className="mx-auto h-24 w-auto text-blue-500" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                        Learn Coding with Us
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Our platform offers accessible, interactive and easy-to-understand programming lessons that make learning code a breeze!
                    </p>
                </div>
                <div className="flex items-center justify-center mt-2">
                    <button className="group relative w-56 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <RiPhoneLine className="h-5 w-5 mr-2 text-white" />
                        <span>Book a call</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

            export default BodyComponent;