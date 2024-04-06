import React from 'react';
import Skill from './Skill';

interface SkillsProps {
    skills: {image: string, title:string}[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {skills.map((skill, index) => <Skill key={index} image={skill.image} title={skill.title} />)}
        </div>
    );
};

export default Skills;