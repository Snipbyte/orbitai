import React from "react";

const FeaturedCard = ({ icon: Icon, title, description, isAbout }) => {
  return (
    <div
      className={`
        flex flex-col items-center text-center p-6 
        min-w-[250px]  
        rounded-xl
        ${isAbout ? "bg-transparent md:w-[23%]" : "bg-desColor bg-opacity-50 md:w-80"}
      `}
    >
      <div className="text-purple-600 text-5xl mb-4">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="md:text-sm text-xs text-paraColor mt-2">{description}</p>
    </div>
  );
};

export default FeaturedCard;
