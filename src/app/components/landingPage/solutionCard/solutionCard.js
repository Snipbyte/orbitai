import React from 'react';
import Images from '../../common/Image/Image';
import Intro from '../../common/intro/intro';

const SolutionCard = ({ imageSrc, heading, description, className }) => {
    return (
        <div className={`border rounded-xl border-gray-800 p-6 w-[80%] min-h-[300px] lg:w-[30%] lg:h-96 bg-desColor ${className}`}>
            <Images className="w-full h-48 object-cover lg:mb-9" src={imageSrc} />
            <Intro
                heading={heading}
                des={description}
                headingClassName="text-xl mb-2 font-bold text-white mx-auto"
                paraClassName="text-sm text-paraColor text-center"
            />
        </div>
    );
};

export default SolutionCard;