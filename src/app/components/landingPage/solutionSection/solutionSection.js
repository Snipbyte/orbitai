import React from 'react';
import Intro from '../../common/intro/intro';
import SolutionCard from '../solutionCard/solutionCard';

const SolutionSection = () => {
    return (
        <div className="text-white pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-20 sm:pb-40 md:pb-60 lg:pb-56 px-4 sm:px-6 md:px-8 lg:px-8 bg-themeColor relative">
            <h2 className="text-xs sm:text-sm md:text-base lg:text-xs font-bold mb-2 uppercase text-white">How it Works</h2>
            <Intro
                heading="Intelligent AI Solutions"
                des="AI Orbits empowers businesses with advanced AI-driven tools like CAIR Drive, CAIR Monitoring, and Journey Management System (JMS) to enhance safety, security, and efficiency."
                headingClassName="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-3 lg:mb-3 text-white"
                paraClassName="text-xs sm:text-sm md:text-sm lg:text-sm max-w-full sm:max-w-md md:max-w-lg lg:max-w-[500px] w-full"
            />
            {/* Grid layout for all screen sizes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 sm:mt-5 md:mt-5 lg:mt-5">
                <SolutionCard
                    imageSrc="/images/cd.jpg"
                    heading="CAIR Drive"
                    description="Real-time driver behavior analysis with drowsiness and distraction detection for enhanced fleet safety."
                    className="w-full"
                />
                <SolutionCard
                    imageSrc="/images/cm.jpg"
                    heading="CAIR Monitoring"
                    description="Edge computing-powered security monitoring with instant alerts and customizable solutions."
                    className="w-full"
                />
                <SolutionCard
                    imageSrc="/images/jms.jpg"
                    heading="Journey Management System (JMS)"
                    description="AI-driven route optimization and safety scoring for secure and efficient travel."
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default SolutionSection;