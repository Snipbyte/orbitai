"use client";
import React, { useState, useEffect } from "react";
import TeamCard from "../teamCard/teamCard";

const teamData = [
  {
    image: "/images/jpg/tm3.jpg",
    name: "CARRINGTON CUNNINGTON",
    experience: "4 Year Experience",
    specialty: "Nutrition & Health",
    recommended: 61,
    about: "I have been a practicing PCI Certified Parent Coach® since 2015. I was drawn to coaching through my experience as a stay-at-home mom raising my triplets, born in 2007. The challenges of raising my kids along with the joy of watching them grow gave me a passion to help other parents find confidence and joy in their parenting journeys. I use my training to help parents through coaching, public speaking, group facilitation, and writing for various online parenting platforms. I believe healthy relationships are foundational to joyful, vibrant family life. I look forward to hearing from you!",
  },
  {
    image: "/images/jpg/tm1.jpg",
    name: "KERELI JOHNSON",
    experience: "6 Year Experience",
    specialty: "Child Development",
    recommended: 43,
    about: "Kereli has worked with families for over 6 years, focusing on early childhood development, emotional intelligence, and creating strong family connections. She helps parents understand child psychology and apply practical strategies to improve communication with their children.",
  },
  {
    image: "/images/jpg/tm2.jpg",
    name: "MICHAEL SMITH",
    experience: "10 Year Experience",
    specialty: "Behavioral Therapy",
    recommended: 77,
    about: "Michael is a certified behavioral therapist with over a decade of experience helping families manage challenges related to parenting and child behavior. He specializes in providing effective coping mechanisms and parenting frameworks.",
  },
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-change every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === teamData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-themeColor py-12 px-4">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white md:mb-10">
        Experience & Certified Experts
      </h2>

      <div className="max-w-6xl mx-auto">
        <TeamCard key={activeIndex} {...teamData[activeIndex]} />
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center mt-6 space-x-3">
        {teamData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full transition-all ${
              activeIndex === index
                ? "bg-purple-500 w-3 h-3 scale-110"
                : "bg-paraColor duration-300 w-2 h-2 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
