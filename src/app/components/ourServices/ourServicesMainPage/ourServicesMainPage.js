"use client"
import React from 'react'
import Footer from '../../common/footer/footer'
import SolutionSection from '../solutionSection/solutionSection'
import FeaturedSection from '../featuredSection/featuredSection'
import TeamSection from '../teamSection/teamSection'
import Header from '../../common/header/header'
import dynamic from 'next/dynamic';
import Header from '../../common/header/header'
const HeroSection = dynamic(() => import('../heroSection/heroSection'), {
  ssr: false,
});

const OurServicesMainPage = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <SolutionSection/>
            <FeaturedSection/>
            <TeamSection/>
            <Footer/>
        </div>
    )
}

export default OurServicesMainPage