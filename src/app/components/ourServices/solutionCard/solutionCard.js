import React from 'react';

const SolutionCard = ({ number, title, description, bgColor }) => {
    return (
        <div className={`flex-1 p-6 ${bgColor}`}>
            <h3 className="md:text-5xl text-4xl font-bold text-purple-600 mb-4">{number}</h3>
            <h4 className="md:text-2xl text-lg font-bold text-white mb-2">{title}</h4>
            <ul className="md:text-sm text-xs text-paraColor pl-5">
                {description.map((item, index) => (
                    <li key={index} className={item.hasBullet ? 'list-disc' : 'list-none'}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SolutionCard;