import React from 'react';
import { FaChartLine, FaRocket, FaHandPointUp } from 'react-icons/fa';

const InfoCard = ({ title, description, icon }) => {
    return (
        <div className="flex items-start p-4 text-white rounded-lg">
            <div className="mr-4 text-3xl">{icon}</div>
            <div>
                <h3 className="md:text-lg text-base font-bold">{title}</h3>
                <p className="text-xs text-paraColor md:text-base">{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;