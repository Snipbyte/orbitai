'use client'
import React from "react";
import { AiFillMerge, AiOutlineBarChart } from "react-icons/ai";
import Images from "../../common/Image/Image";

const PlanSection = () => {
    const cardsData = [
        {
            src: "/images/jpg/ab2.jpg",
            alt: "ai training",
            title: "Advanced",
            subtitle: "Training",
        },
        {
            src: "/images/jpg/ab4.jpg",
            alt: "ai infrastructure",
            title: "10,000+ Sq. Ft.",
            subtitle: "Infrastructure",
        },
        {
            src: "/images/jpg/ab1.jpg",
            alt: "ai research",
            title: "Cutting-Edge",
            subtitle: "Research",
        },
        {
            src: "/images/jpg/ab3.jpg",
            alt: "ai deployment",
            title: "Seamless",
            subtitle: "Deployment",
        },
    ];

    return (
        <div className="w-full flex flex-col md:flex-row bg-themeColor">
            <div className="text-white p-10 md:w-[25%] flex flex-col justify-center gap-10 border-r border-gray-700">
                <div className="flex flex-col items-start gap-2">
                    <AiFillMerge className="text-white text-3xl" />
                    <h2 className="text-4xl font-bold">5000+</h2>
                    <p className="text-lg text-gray-300">AI Training Datasets.</p>
                </div>

                <div className="flex flex-col items-start gap-2">
                    <AiOutlineBarChart className="text-white text-3xl" />
                    <h2 className="text-4xl font-bold">100+</h2>
                    <p className="text-lg text-gray-300">AI Models Deployed.</p>
                </div>
            </div>

            <div className="flex-1 p-10">
                <h2 className="text-2xl md:text-5xl font-semibold text-white mb-10 leading-snug">
                    Finally, a hub for all AI innovation.
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {cardsData.map((card, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <Images
                                src={card.src}
                                alt={card.alt}
                                className="w-full h-36 object-cover rounded-xl shadow-[0_0_50px_rgba(155,80,255,0.3)]"
                            />
                            <h3 className="mt-4 text-sm md:text-xl font-semibold text-white">
                                {card.title}
                            </h3>
                            <p className="text-white text-xs md:text-base">{card.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlanSection;