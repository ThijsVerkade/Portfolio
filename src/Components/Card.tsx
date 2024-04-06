import * as React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title }) => {
    return (
        <div className="w-full rounded-lg overflow-hidden shadow-lg border-2 border-gray-700">
            <img className="w-full" src={imageUrl} alt={title} />
            <div className="p-3 text-left">
                <h2 className="text-base text-primary font-bold">{title}</h2>
                <span className="mt-2 text-sm text-gray-600 text-ellipsis overflow-hidden">
                    Our platform offers accessible, interactive and easy-to-understand programming lessons that make
                    learning code a breeze!
                </span>
            </div>
        </div>
    );
};

export default Card;