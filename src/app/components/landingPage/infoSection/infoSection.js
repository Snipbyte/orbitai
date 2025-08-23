import React from "react";
import Intro from "../../common/intro/intro";
import InfoCard from "../infoCard/infoCard";
import { IoDiamondSharp, IoRocketOutline } from "react-icons/io5";

const cardData = [
    {
        title: "Branding & Design",
        image: "/images/jpg/image.jpg",
        description:
            "Branding and design are creative processes and strategic messaging to craft compelling marketing solutions.",
        imgTitle: "Creative Branding",
        imgDescription: "Crafting unique visual identities.",
        icon: IoDiamondSharp,
        reverse: false,
    },
    {
        title: "Campaign Development",
        image: "/images/jpg/image.jpg",
        description:
            "This process ensures tailored solutions that drive engagement and conversions for your business.",
        imgTitle: "Marketing Campaigns",
        imgDescription: "Driving engagement through strategic campaigns.",
        icon: IoRocketOutline,
        reverse: true,
    },
];

const InfoSection = () => {
    return (
        <div className="bg-themeColor px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
                <Intro
                    heading="Seamless, Flexible, and Efficient Workflow"
                    des=""
                    headingClassName="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-2 max-w-80 sm:max-w-96 md:max-w-96 lg:max-w-96"
                />
                <Intro
                    heading=""
                    des="Our workflow is designed to be seamless, flexible, and highly efficient. It adapts to your needs, ensuring smooth processes from start to finish..."
                    paraClassName="text-sm sm:text-base md:text-lg lg:text-lg w-full mb-4 md:mb-0 max-w-full sm:max-w-md md:max-w-lg lg:max-w-[500px]"
                />
            </div>
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {cardData.map((card, index) => (
                    <InfoCard
                        key={index}
                        title={card.title}
                        image={card.image}
                        description={card.description}
                        imgTitle={card.imgTitle}
                        imgDescription={card.imgDescription}
                        icon={card.icon}
                        reverse={card.reverse}
                    />
                ))}
            </div>
        </div>
    );
};

export default InfoSection;