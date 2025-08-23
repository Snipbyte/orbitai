import React from "react";
import FeaturedCard from "../featuredCard/featuredCard";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { MdOutlineVideoCall } from "react-icons/md";
import { RiCalendarCheckLine } from "react-icons/ri";
import { TbCalendarPlus } from "react-icons/tb";

const featuresData = [
  { id: 1, icon: RiCalendarCheckLine, title: "Free first session", description: "Swift Creative Solutions met and exceeded our expectations in designing our website and" },
  { id: 2, icon: HiOutlineChatBubbleLeftRight, title: "Message with expert anytime", description: "Swift Creative Solutions met and exceeded our expectations in designing our website and" },
  { id: 3, icon: MdOutlineVideoCall, title: "Online Video/Voice calls", description: "Swift Creative Solutions met and exceeded our expectations in designing our website and" },
  { id: 4, icon: FaRegCalendarAlt, title: "Scheduling", description: "Swift Creative Solutions met and exceeded our expectations in designing our website and" },
  { id: 5, icon: TbCalendarPlus, title: "Add to Calendar reminders", description: "Swift Creative Solutions met and exceeded our expectations in designing our website and" },
];

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-themeColor">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Our Features
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto md:flex-wrap md:justify-center md:overflow-visible px-4 md:px-0"
      style={{
        /* Hide scrollbar for Webkit browsers */
        scrollbarWidth: 'none',       // Firefox
        msOverflowStyle: 'none',      // IE and Edge
    }}
      >
        {featuresData.map((feature) => (
          <FeaturedCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
