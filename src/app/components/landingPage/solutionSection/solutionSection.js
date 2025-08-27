import React from 'react';
import Intro from '../../common/intro/intro';
import SolutionCard from '../solutionCard/solutionCard';

const SolutionSection = () => {
    return (
        <div className="text-white pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-20 sm:pb-40 md:pb-60 lg:pb-56 px-4 sm:px-6 md:px-8 lg:px-8 bg-themeColor relative">
            <h2 className="text-xs sm:text-sm md:text-base lg:text-xs font-bold mb-2 uppercase text-white">How it Works</h2>
            <Intro
                heading="Intelligent AI Solutions"
                des="AI Orbits empowers businesses with advanced AI-driven tools like Cair Drive, Cair Monitoring, and Journey Management System (JMS) to enhance safety, security, and efficiency."
                headingClassName="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-3 lg:mb-3 text-white"
                paraClassName="text-xs sm:text-sm md:text-sm lg:text-sm max-w-full sm:max-w-md md:max-w-lg lg:max-w-[500px] w-full"
            />
            <div className="relative w-full h-[400px] mt-4 sm:mt-5 md:mt-5 lg:mt-5 hidden lg:block">
                <SolutionCard
                    imageSrc="/images/cd.jpg"
                    heading="Cair Drive"
                    description="Real-time driver behavior analysis with drowsiness and distraction detection for enhanced fleet safety."
                    className="absolute left-20 top-44 rotate-6"
                />
                <SolutionCard
                     imageSrc="/images/cm.jpg"
                    heading="Cair Monitoring"
                    description="Edge computing-powered security monitoring with instant alerts and customizable solutions."
                    className="absolute right-60 top-16 -rotate-6 transform -translate-x-1/2 z-10"
                />
                <SolutionCard
                    imageSrc="/images/jms.jpg"
                    heading="Journey Management System (JMS)"
                    description="AI-driven route optimization and safety scoring for secure and efficient travel."
                    className="absolute right-20 -top-40 rotate-6"
                />
            </div>
            <div className="flex flex-nowrap overflow-auto w-full h-auto mt-4 sm:mt-5 md:mt-5 gap-4 lg:hidden"
                style={{
                    /* Hide scrollbar for Webkit browsers */
                    scrollbarWidth: 'none',       // Firefox
                    msOverflowStyle: 'none',      // IE and Edge
                }}
            >
                <SolutionCard
                    imageSrc="/images/cd.jpg"
                    heading="Cair Drive"
                    description="Real-time driver behavior analysis with drowsiness and distraction detection for enhanced fleet safety."
                    className="w-full min-h-[300px] flex-shrink-0"
                />
                <SolutionCard
                     imageSrc="/images/cm.jpg"
                    heading="Cair Monitoring"
                    description="Edge computing-powered security monitoring with instant alerts and customizable solutions."
                    className="w-full min-h-[300px] flex-shrink-0"
                />
                <SolutionCard
                    imageSrc="/images/jms.jpg"
                    heading="Journey Management System (JMS)"
                    description="AI-driven route optimization and safety scoring for secure and efficient travel."
                    className="w-full min-h-[300px] flex-shrink-0"
                />
            </div>
        </div>
    );
};

export default SolutionSection;