import React from "react";
import Images from "../../common/Image/Image";
import Intro from "../../common/intro/intro";

const InfoCard = ({ title, description, image, reverse, imgTitle, imgDescription, icon: Icon = IoDiamondSharp }) => {
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-6 md:gap-8 lg:gap-12 py-8 sm:py-10 md:py-12 lg:py-16 max-w-7xl mx-auto`}>
            <div className="relative flex-shrink-0 w-full md:w-1/2 rounded-2xl overflow-hidden group  md:p-8 lg:p- bg-gray-900/80 shadow-lg transition-all duration-300 hover:shadow-xl">
                <Images
                    src={image}
                    alt={imgTitle || title}
                    width={400}
                    height={250}
                    className="rounded-2xl w-full h-56 md:h-64 lg:h-72 border border-gray-700/50 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-700/60 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
                <div className="absolute bottom-6 md:bottom-8 lg:bottom-10 left-6 md:left-8 lg:left-10 text-white">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight">{imgTitle || title}</h3>
                    <p className="text-sm md:text-base lg:text-base text-gray-200 mt-2 max-w-md">{imgDescription || description}</p>
                </div>
            </div>
            <div className={`w-full md:w-1/2 ${reverse ? "md:flex-row-reverse" : ""}`}>
                <div className="border border-gray-700/50 rounded-2xl p-6 md:p-8 lg:p-10 bg-gray-800/50 backdrop-blur-sm shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-800/70 max-w-lg mx-auto">
                    <div className="mx-auto w-12 md:w-14 lg:w-16 mb-4">
                        <Icon size={48} className="text-purple-400 w-full h-full transition-colors duration-300 group-hover:text-purple-300" />
                    </div>
                    <Intro
                        heading={title}
                        des={description}
                        headingClassName="text-base md:text-lg lg:text-xl font-bold text-white mb-4 md:mb-5 lg:mb-6 tracking-tight"
                        paraClassName="text-sm md:text-base lg:text-base text-gray-300 max-w-prose leading-relaxed"
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoCard;