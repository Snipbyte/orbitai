import React from "react";
import { SiTicktick } from "react-icons/si";
import Images from "../../common/Image/Image";

const TeamCard = ({ image, name, experience, specialty, recommended, about }) => {
  return (
    <div
      className="flex flex-col md:flex-row items-start lg:items-center gap-8 px-6 md:px-10 lg:px-16 
                 w-full max-w-4xl mx-auto py-10 bg-desColor bg-opacity-50
                 rounded-xl shadow-lg transition-all duration-700 ease-in-out
                 animate-fade-slide"
    >
      {/* Left */}
      <div className="flex flex-col items-start">
        <Images
          src={image}
          alt={name}
          className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover rounded-lg shadow-md"
        />
        <h3 className="mt-4 text-lg font-semibold text-white uppercase">
          {name}
        </h3>
        <div className="mt-3 space-y-2 w-full">
          <div className="flex items-center gap-2 bg-purple-500/15 backdrop-blur-sm bg-opacity-20 
                          px-4 py-2 rounded-md text-sm text-paraColor">
            <SiTicktick className="w-4 h-4 text-purple-500" /> {experience}
          </div>
          <div className="flex items-center gap-2 bg-purple-500/15 backdrop-blur-sm bg-opacity-20 
                          px-4 py-2 rounded-md text-sm text-paraColor">
            <SiTicktick className="w-4 h-4 text-purple-500" /> {specialty}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex-1">
        <div className="bg-purple-500/15 w-60 md:w-auto backdrop-blur-sm bg-opacity-20 text-purple-500 text-sm 
                        px-4 py-2 rounded-md font-medium mb-4 flex items-center gap-2">
          <SiTicktick /> Recommended by {recommended} peoples
        </div>
        <h4 className="text-lg font-semibold text-white mb-2">ABOUT ME</h4>
        <p className="text-paraColor leading-relaxed text-sm">{about}</p>
      </div>
    </div>
  );
};

export default TeamCard;
