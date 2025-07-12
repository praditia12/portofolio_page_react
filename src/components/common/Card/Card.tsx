import React from "react";

interface CardProjectProps {
    image: string;
    date: string;
    title: string;
    description: string;
}

const CardProject: React.FC<CardProjectProps> = ({ image, date, title, description }) => {
    return (
        <div className="w-full h-full bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
            {/* Image */}
            <div className="w-full h-52 md:h-60 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <p className="text-sm italic text-gray-500 mb-1">{date}</p>
                <h3 className="text-xl font-semibold text-orange mb-2">{title}</h3>
                <p className="text-gray-700 text-base leading-relaxed line-clamp-5">{description}</p>
            </div>
        </div>
    );
};

export default CardProject;
