import React from "react";

interface CardProjectProps {
    image: string;
    date: string;
    title: string;
    description: string;
}

const CardProject: React.FC<CardProjectProps> = ({ image, date, title, description }) => {
    return (
        <div className="max-w-md">
            <img src={image} alt={title} className="w-full object-cover mb-4" />
            <p className="italic text-gray-600 text-sm mb-2">{date}</p>
            <h3 className="text-xl font-semibold text-orange mb-2">{title}</h3>
            <p className="text-gray-700 text-base leading-relaxed">{description}</p>
        </div>
    );
};

export default CardProject;
