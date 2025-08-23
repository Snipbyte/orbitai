import React from 'react';
import Intro from '../../common/intro/intro';
import SolutionCard from '../solutionCard/solutionCard';

const SolutionSection = () => {
    const stepsData = [
        { 
            number: '01', 
            title: 'AI Strategy & Consulting', 
            description: [
                { text: 'AI Readiness Assessment', hasBullet: true },
                { text: 'Use Case Identification', hasBullet: true },
                { text: 'AI Roadmap & Implementation Plan', hasBullet: true },
                { text: 'Data Collection & Preparation Guidance', hasBullet: true },
                { text: 'Ethical AI & Compliance Advisory', hasBullet: true },
                { text: 'Include: Case studies, success metrics, and ROI impact.', hasBullet: false }
            ],
            bgColor: 'bg-desColor' 
        },
        { 
            number: '02', 
            title: 'AI Development & Integration', 
            description: [
                { text: 'Custom AI Model Development (NLP, CV, ML)', hasBullet: true },
                { text: 'Chatbots & Virtual Assistants', hasBullet: true },
                { text: 'Predictive Analytics Solutions', hasBullet: true },
                { text: 'API Integration with Existing Systems', hasBullet: true },
                { text: 'Cloud AI Services (AWS, Azure, GCP)', hasBullet: true },
            ], 
            bgColor: 'bg-transparent' 
        },
        { 
            number: '03', 
            title: 'AI-Powered Applications', 
            description: [
                { text: 'Generative AI (Text, Image, Video)', hasBullet: true },
                { text: 'AI-Powered Search & Recommendation Engines', hasBullet: true },
                { text: 'Voice & Speech Recognition Systems', hasBullet: true },
                { text: 'Automation & RPA (Robotic Process Automation)', hasBullet: true },
                { text: 'AI for E-commerce & Personalization', hasBullet: true },
            ], 
            bgColor: 'bg-transparent' 
        },
        { 
            number: '04', 
            title: 'AI Training & Support', 
            description: [
                { text: 'AI Workshops & Corporate Training', hasBullet: true },
                { text: 'Documentation & User Guides', hasBullet: true },
                { text: 'Ongoing AI Model Monitoring & Updates', hasBullet: true },
                { text: 'Dedicated AI Support & Maintenance', hasBullet: true },
                { text: 'Performance Optimization & Scaling', hasBullet: true },
            ], 
            bgColor: 'bg-desColor' 
        },
    ];

    return (
        <div className="py-8 px-4 bg-themeColor 2xl:-mt-36">
          <Intro
            heading='Simple Steps to Build Your AI Solution'
            des=''
            headingClassName='text-2xl md:text-4xl font-bold mb-10 text-white mx-auto'
            useGradient={true}
            gradientText='AI Steps'
          />
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
                {stepsData.map((step, index) => (
                    <SolutionCard
                        key={index}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                        bgColor={step.bgColor}
                    />
                ))}
            </div>
        </div>
    );
};

export default SolutionSection;
