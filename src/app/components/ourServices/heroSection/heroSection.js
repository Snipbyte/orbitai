'use client';
import React from 'react';
import Chart from 'react-apexcharts';
import Button from '../../common/button/button';
import Intro from '../../common/intro/intro';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  // ✅ Safe scroll handler
  const handleScrollDown = () => {
    if (typeof window !== 'undefined') {
      window.scrollBy({ top: 650, behavior: 'smooth' });
    }
  };

  // 📊 Refined Purple Chart
  const chartData = {
    series: [
      {
        name: 'AI Growth',
        data: [4, 2.5, 6, 3.2, 5, 2, 6.5],
      },
    ],
    options: {
      chart: {
        type: 'area',
        toolbar: { show: false },
        zoom: { enabled: false },
        sparkline: { enabled: true },
        height: 320,
        parentHeightOffset: 0, 
      },
      stroke: {
        curve: 'smooth',
        width: 3,
        colors: ['#9333ea'],
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 0.05,
          stops: [0, 100],
        },
        colors: ['#9333ea'],
      },
      markers: {
        size: 5,
        colors: ['#fff'],
        strokeColor: '#9333ea',
        strokeWidth: 2,
        hover: { size: 6 },
      },
      dataLabels: { enabled: false },
      grid: {
        borderColor: 'rgba(255,255,255,0.1)',
        strokeDashArray: 4,
        padding: { top: 0, right: 0, bottom: -20, left: 0 }, // 👈
      },
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false },
      },
      yaxis: { show: false },
      tooltip: { enabled: false },
    },
    
  };

  return (
    <div className="bg-themeColor w-full overflow-hidden min-h-screen">
      {/* Top section */}
      <div className="flex flex-col items-center justify-start pt-10 px-4">
        <Intro
          heading="AI Solutions to Power the Future"
          des="We build intelligent AI-driven platforms that automate workflows, analyze data, and deliver next-gen digital experiences."
          headingClassName="md:text-4xl text-2xl lg:text-5xl font-bold text-center leading-tight w-full md:w-[800px] mx-auto text-white"
          paraClassName="text-center mt-4 max-w-2xl text-xs md:text-sm mx-auto"
          useGradient={true}
          gradientText="AI Future."
        />
        <Button
          className="mt-6 md:px-6 px-4 py-2 rounded-full text-xs md:text-base border-white text-white"
          onClick={handleScrollDown}
          style={{ transform: 'translateY(5.16477px)' }}
        >
          Explore Our AI Services
          <FaArrowDown className="ml-2 animate-bounce" />
        </Button>
      </div>

      {/* Chart section */}
      <div className="relative w-full">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={320}
        />

        {/* Floating cards */}
        <div className="absolute top-4 left-8 bg-desColor/90 px-4 py-3 rounded-xl shadow-md backdrop-blur-sm">
          <p className="text-sm text-paraColor">AI Revenue</p>
          <p className="text-purple-500 text-xl font-semibold">+$15,500.90</p>
        </div>
        <div className="absolute top-[110px] left-1/2 transform -translate-x-1/2 bg-desColor/90 px-6 py-2 rounded-xl shadow backdrop-blur-sm">
          <p className="text-white font-semibold">$8,733.02</p>
        </div>
        <div className="absolute top-4 right-8 bg-desColor/90 px-4 py-3 rounded-xl shadow-md backdrop-blur-sm">
          <p className="text-sm text-paraColor">AI Expenses</p>
          <p className="text-red-500 text-xl font-semibold">-$12,200.34</p>
        </div>

        {/* Dashed line and indicator */}
        <div className="absolute top-[95px] left-1/2 transform -translate-x-1/2 h-[160px] border-l-2 border-dashed border-purple-500 z-[-1]"></div>
        <div className="absolute top-[95px] left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-purple-500 bg-white/60 backdrop-blur-sm"></div>
      </div>
    </div>
  );
};

export default HeroSection;
