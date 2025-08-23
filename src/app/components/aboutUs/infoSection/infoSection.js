import React from 'react';
import InfoCard from '../infoCard/infoCard';
import { FaChartLine, FaCube, FaRocket, FaHandPointUp } from 'react-icons/fa';

const InfoSection = () => {
  const cardsData = [
    {
      title: 'Define the AI Strategy',
      description: 'A clear AI strategy is crucial for leveraging technology, setting AI goals, and providing a roadmap for innovation.',
      icon: <FaChartLine />,
    },
    {
      title: 'Optimize AI Models',
      description: 'Optimizing AI models can enhance performance, reduce costs, and accelerate deployment for transformative results.',
      icon: <FaCube />,
    },
    {
      title: 'Boost AI Performance',
      description: 'Enhancing AI capabilities is key to success, with various techniques to improve accuracy and efficiency.',
      icon: <FaRocket />,
    },
    {
      title: 'Evaluate AI Solutions',
      description: 'Testing and evaluating AI ensures high-quality outcomes, user satisfaction, and competitiveness in the AI market.',
      icon: <FaHandPointUp />,
    },
  ];

  return (
    <div className="bg-themeColor text-white px-6 py-16">
      <h2 className="md:text-4xl text-2xl font-bold mb-6 text-center">They love how we build their AI solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
        {cardsData.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoSection;