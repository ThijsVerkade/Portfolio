import React, { useState } from 'react';
import { RiMapPinFill, RiGlobalFill } from '@remixicon/react';

type ExperienceCardProps = {
    title: string;
    from: string;
    until: string;
    description: string;
    location: string;
    website: string;
    jobInfo: string;
    skills: string[];
};

type CardHeaderProps = {
    title: string;
    from: string;
    until: string;
    onClick: () => void;
};

type CardContentProps = {
    location: string;
    website: string;
    jobInfo: string;
    skills: string[];
};

const CardHeader: React.FC<CardHeaderProps> = ({title, from, until, onClick}) => (
    <div
        className="flex justify-between items-center cursor-pointer bg-gray-900 rounded-t-lg p-3 border-2 border-gray-700"
        onClick={onClick}
    >
        <h3 className="font-bold">{title}</h3>
        <span className="text-sm text-gray-600">{from} - {until}</span>
    </div>
);

const CardContent: React.FC<CardContentProps> = ({location, website, jobInfo, skills}) => (
    <div className="rounded-b-lg p-3 bg-gray-900 border-t-0 border-2 border-gray-700 text-left">
        <div className="text-gray-600 flex text-xs">
            <div className="flex items-center pr-4">
                <RiMapPinFill className="w-6 h-6 inline-block pr-2"/>
                <span className="hover:underline">{location}</span>

            </div>
            <div className="flex items-center">
                <RiGlobalFill className="w-6 h-6 inline-block pr-2"/>
                <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    {website}
                </a>
            </div>
        </div>
        <p className="text-white text-sm mt-4 align-baseline">
            {jobInfo}
        </p>
        <ul className="flex p-0 mt-4 list-none">
            {skills.map((skill, index) =>
                <li key={index} className="bg-primary text-white px-2 py-1 m-1 rounded text-xs">{skill}</li>
            )}
        </ul>
    </div>
);

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="text-white shadow mb-4">
            <CardHeader
                title={props.title}
                from={props.from}
                until={props.until}
                onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && <CardContent location={props.location} website={props.website} jobInfo={props.jobInfo} skills={props.skills} />}
        </div>
    );
};

export default ExperienceCard;