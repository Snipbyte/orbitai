import React from 'react';

const WorkingSection = () => {
    return (
        <div className="text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-themeColor">
            <h2 className="text-xs sm:text-sm md:text-base font-bold mb-2 uppercase text-white">Timeline</h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-white">
                Working Period
            </h2>
            <div className="space-y-6 sm:space-y-7 md:space-y-8 text-xs sm:text-sm md:text-base">
                {[
                    {
                        date: 'March, 2010 – July, 2012',
                        title: 'Head Designer',
                        company: 'Simono Design Group, London',
                    },
                    {
                        date: 'August, 2013 – May, 2014',
                        title: 'Senior UX & UI Designer',
                        company: 'Baxdoro Design, London',
                    },
                    {
                        date: 'September, 2015 – November, 2016',
                        title: 'Creative Director & Senior Designer',
                        company: 'Arimana Co. Ltd, Amsterdam',
                    },
                    {
                        date: 'December, 2016 – July, 2017',
                        title: 'Apps Development',
                        company: 'Raxuna Poc, New York',
                    },
                    {
                        date: 'January, 2018 – October, 2021',
                        title: 'CEO Bloom',
                        company: 'Dawsonville, New York',
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 ${index !== 4 ? 'border-b border-gray-700 pb-4 sm:pb-5 md:pb-6' : ''}`}
                    >
                        <p className="text-gray-200">{item.date}</p>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-gray-400">{item.company}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkingSection;