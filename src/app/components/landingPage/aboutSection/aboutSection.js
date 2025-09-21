import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const AboutSection = () => {
    return (
        <div className="bg-themeColor pb-6 sm:pb-8 md:pb-10">
            <h1 className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[200px] tracking-tighter uppercase font-bold px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                About
            </h1>
            <div className="flex flex-col sm:flex-row items-center text-white text-opacity-70 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <div className="hidden lg:block text-6xl sm:text-8xl md:text-[120px] lg:text-[200px] xl:text-[300px] mb-4 sm:mb-0 sm:mr-6 md:mr-8">
                    <MdArrowOutward />
                </div>
                <p className="text-sm sm:text-lg md:text-xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-[700px]">
                    At AI Orbits, we are revolutionizing safety and efficiency through cutting-edge AI solutions. Based in Khubar, Saudi Arabia, our mission is to empower businesses with intelligent tools like CAIR Drive, CAIR Monitoring, and our Journey Management System (JMS). From real-time driver behavior analysis to advanced security monitoring powered by edge computing, our innovative products enhance safety, reduce risks, and drive operational excellence. Join us in shaping a smarter, safer future with AI-driven technology tailored to your needs.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;