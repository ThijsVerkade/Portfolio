import React from 'react';

interface SkillProps {
    image: string;
    title: string;
}

const Skill: React.FC<SkillProps> = ({ image, title }) => {
    return (
        <div className="w-24 h-34 mx-auto border-primary border-2 text-primary shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-2">
                <img src={image} alt="Skill" className="w-14 h-14 object-contain mx-auto"/>
            </div>
            <div className="py-2">
                <h1 className="text-center font-bold text-sm">{title}</h1>
            </div>
        </div>
    );
};

export default Skill;