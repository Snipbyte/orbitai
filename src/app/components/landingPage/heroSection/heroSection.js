import React from 'react';
import Button from '../../common/button/button';
import Images from '../../common/Image/Image';

const HeroSection = () => {
    return (
        <div className="bg-[radial-gradient(circle_at_center,_#3d0b62,_#0c0c0f)] min-h-screen flex flex-col">
            <div className="text-white pt-16 pb-8 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    Shaping the Future with
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-500">
                        Intelligent Solutions
                    </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-lg mb-8 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                    Become a global pioneer in AI innovation, creating intelligent solutions that change the world and enrich lives.
                </p>
                <Button className="bg-white text-black border border-white px-4 py-2 sm:px-6 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-semibold shadow-[0_0_20px_rgba(155,80,255,0.9)] hover:shadow-[0_0_25px_rgba(186,104,255,0.9)] transition-all">
                    Get Started
                </Button>
            </div>
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 pb-16 md:pb-24">
                <Images
                    src="/images/bnr.jpg"
                    className="w-full max-w-[95%] mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl shadow-[0_0_50px_rgba(155,80,255,0.8)] border border-gray-800 object-cover"
                />
            </div>
        </div>
    );
};

export default HeroSection;