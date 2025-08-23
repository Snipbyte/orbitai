import React from "react";
import FeaturedCard from "../../ourServices/featuredCard/featuredCard";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { MdOutlineVideoCall } from "react-icons/md";
import { RiCalendarCheckLine } from "react-icons/ri";
import { TbCalendarPlus } from "react-icons/tb";
import { FaBrain, FaUsers, FaShieldAlt } from "react-icons/fa";

const featuresData = [
  {
    id: 1,
    icon: FaBrain,
    title: "AI-Powered Insights",
    description:
      "We leverage advanced AI to deliver real-time insights that help businesses grow smarter and faster.",
  },
  {
    id: 2,
    icon: FaUsers,
    title: "Dedicated Team",
    description:
      "Our experts collaborate closely with clients, ensuring tailored solutions that meet unique needs.",
  },
  {
    id: 3,
    icon: FaShieldAlt,
    title: "Secure & Reliable",
    description:
      "We prioritize security and reliability to safeguard your data and ensure seamless operations.",
  },
  {
    id: 4,
    icon: RiCalendarCheckLine,
    title: "Free First Session",
    description:
      "Get started with a complimentary consultation to explore how our AI solutions can benefit you.",
  },
  {
    id: 5,
    icon: HiOutlineChatBubbleLeftRight,
    title: "Message with Experts",
    description:
      "Stay connected anytime with our specialists for instant guidance and support.",
  },
  {
    id: 6,
    icon: MdOutlineVideoCall,
    title: "Online Video/Voice Calls",
    description:
      "Engage in secure video or voice sessions with our AI experts for real-time collaboration.",
  },
  {
    id: 7,
    icon: FaRegCalendarAlt,
    title: "Smart Scheduling",
    description:
      "Easily book sessions at your convenience with our intelligent scheduling system.",
  },
  {
    id: 8,
    icon: TbCalendarPlus,
    title: "AI Calendar Reminders",
    description:
      "Never miss an important session with automated reminders powered by AI.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-themeColor">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Who We Are
        </h2>
      </div>

      {/* Cards */}
      <div
        className="flex gap-6 overflow-x-auto md:flex-wrap md:justify-center md:overflow-visible px-4 md:px-0"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
      >
        {featuresData.map((feature) => (
          <FeaturedCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            isAbout={true}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
