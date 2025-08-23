import React from 'react'
import HeroSection from '../heroSection/heroSection'
import InfoSection from '../infoSection/infoSection'
import PlanSection from '../planSection/planSection'
import Footer from '../../common/footer/footer'
import AboutSection from '../aboutSection/aboutSection'
import Header from '../../common/header/header'

const AboutUsMainPage = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <InfoSection/>
            <PlanSection/>
            <AboutSection/>
            <Footer/>
        </div>
    )
}

export default AboutUsMainPage