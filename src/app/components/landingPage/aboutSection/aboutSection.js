import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const AboutSection = () => {
    return (
        <div className="bg-themeColor pb-6 sm:pb-8 md:pb-10">
            <h1 className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[200px] tracking-tighter uppercase font-bold px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                About
            </h1>
            <div className="flex flex-col sm:flex-row items-center text-white text-opacity-70 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <div className=" hidden lg:block text-6xl sm:text-8xl md:text-[120px] lg:text-[200px] xl:text-[300px] mb-4 sm:mb-0 sm:mr-6 md:mr-8">
                    <MdArrowOutward />
                </div>
                <p className="text-sm sm:text-lg md:text-xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-[700px]">
                    Why scrambled text? That's exactly the point. By using text that's unreadable but maintains the general pattern of regular writing — including normal word length, spacing, and punctuation — designers can focus on the visual elements of a layout without the actual content getting in the way. The pseudo-Latin appearance gives it a natural feel while ensuring it won't distract from the design itself.
                    Why scrambled text? That's exactly the point. By using text that's unreadable but maintains the general pattern of regular writing — including normal word length, spacing, and punctuation — designers can focus on the visual elements of a layout without the actual content getting in the way. The pseudo-Latin appearance gives it a natural feel while ensuring it won't distract from the design itself.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;