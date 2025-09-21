import React from 'react';
import Images from '../../common/Image/Image';
import Intro from '../../common/intro/intro';

const SolutionCard = ({ imageSrc, heading, description, className }) => {
    return (
        <div
            className={`border rounded-xl border-gray-800 p-4 sm:p-6 w-full bg-desColor ${className}`}
        >
            <Images
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 sm:mb-6"
                src={imageSrc}
            />
            <Intro
                heading={heading}
                des={description}
                headingClassName="text-lg sm:text-xl mb-2 font-bold text-white text-center"
                paraClassName="text-xs sm:text-sm text-paraColor text-center"
            />
        </div>
    );
};

export default SolutionCard;