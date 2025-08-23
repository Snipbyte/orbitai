import React from "react";
import Images from "../../common/Image/Image";
import Intro from "../../common/intro/intro";

const InfoCard = ({ title, description, image, reverse, imgTitle, imgDescription, icon: Icon = IoDiamondSharp }) => {
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-4 sm:gap-5 md:gap-6 py-6 sm:py-8 md:py-10`}>
            <div className="relative flex-shrink-0 w-full sm:w-4/5 md:w-3/4 rounded-xl overflow-hidden group p-4 sm:p-6 md:p-8 lg:p-10">
                <Images
                    src={image}
                    alt={imgTitle || title}
                    width={300}
                    height={200}
                    className="rounded-xl w-full h-48 sm:h-56 md:h-60 lg:h-60 object-cover border border-gray-500 border-x-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-8 left-4 sm:left-6 md:left-8 lg:left-10 text-white">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold">{imgTitle || title}</h3>
                    <p className="text-xs sm:text-sm md:text-sm lg:text-sm">{imgDescription || description}</p>
                </div>
            </div>
            <div className={`flex justify-center w-full sm:w-3/5 md:w-2/5 lg:w-1/4 ${reverse ? "md:flex-row-reverse" : ""}`}>
                <div className="border rounded-xl border-gray-800 p-4 sm:p-5 md:p-6 lg:p-6 w-full max-w-md">
                    <div className="mx-auto w-10 sm:w-12 md:w-15 lg:w-15">
                        <Icon size={40} className="text-white w-full h-full" />
                    </div>
                    <Intro
                        heading={title}
                        des={description}
                        headingClassName="text-sm sm:text-base md:text-base lg:text-base font-bold text-white mb-4 sm:mb-5 md:mb-6 lg:mb-6"
                        paraClassName="text-xs sm:text-sm md:text-sm lg:text-sm text-paraColor max-w-[700px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoCard;