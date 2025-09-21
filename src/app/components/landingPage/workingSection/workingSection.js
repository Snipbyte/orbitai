import React from 'react';

const WorkingSection = () => {
    return (
        <div className="text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-themeColor">
            <h2 className="text-xs sm:text-sm md:text-base font-bold mb-2 uppercase text-white">Timeline</h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-white">
                AI Innovation Journey
            </h2>
            <div className="space-y-6 sm:space-y-7 md:space-y-8 text-xs sm:text-sm md:text-base">
                {[
                    {
                        date: 'March, 2022 – July, 2022',
                        title: 'AI Research Lead',
                        company: 'AI Orbits, Khubar, Saudi Arabia',
                        description: 'Developed foundational algorithms for CAIR Drive’s driver behavior analysis system.'
                    },
                    {
                        date: 'August, 2022 – May, 2023',
                        title: 'Senior AI Engineer',
                        company: 'AI Orbits, Khubar, Saudi Arabia',
                        description: 'Led the integration of real-time drowsiness detection for CAIR Drive.'
                    },
                    {
                        date: 'June, 2023 – November, 2023',
                        title: 'Director of AI Monitoring Solutions',
                        company: 'AI Orbits, Khubar, Saudi Arabia',
                        description: 'Spearheaded the launch of CAIR Monitoring, powered by edge computing for security.'
                    },
                    {
                        date: 'December, 2023 – July, 2024',
                        title: 'AI Product Manager',
                        company: 'AI Orbits, Khubar, Saudi Arabia',
                        description: 'Designed the Journey Management System (JMS) for optimized travel safety.'
                    },
                    {
                        date: 'August, 2024 – October, 2025',
                        title: 'Chief AI Strategist',
                        company: 'AI Orbits, Khubar, Saudi Arabia',
                        description: 'Driving innovation across CAIR Drive, CAIR Monitoring, and JMS with advanced AI solutions.'
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 ${index !== 4 ? 'border-b border-gray-700 pb-4 sm:pb-5 md:pb-6' : ''}`}
                    >
                        <p className="text-gray-200">{item.date}</p>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-gray-400">{item.company}<br/>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkingSection;