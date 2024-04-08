import React from 'react';
import { RiLinkedinBoxFill, RiGithubFill } from '@remixicon/react';


const Footer: React.FC = () => {
    return (
        <footer className="bg-backgroundPrimary text-white p-5 mt-10 flex justify-between items-center">
            <div className="w-1/5">
                {/* replace "./logo.svg" with your desired logo source or component */}
                <img src="./logo.svg" alt="Company Logo" className="h-10 w-10" />
            </div>
            <div className="w-4/5 flex justify-end space-x-4">
                <a className="text-sm" href="mailto:info@example.com">info@example.com</a>
                <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
                    <RiLinkedinBoxFill className="h-6 w-6" />
                </a>
                <a href="https://github.com/yourgithubprofile" target="_blank" rel="noopener noreferrer">
                    <RiGithubFill className="h-6 w-6" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;