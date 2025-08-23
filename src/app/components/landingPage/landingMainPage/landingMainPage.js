import React from 'react'
import HeroSection from '../heroSection/heroSection'
import AboutSection from '../aboutSection/aboutSection'
import MarqueeSection from '../marqueeSection/marqueeSection'
import InfoSection from '../infoSection/infoSection'
import SubscriptionSection from '../subscriptionSection/subscriptionSection'
import WorkingSection from '../workingSection/workingSection'
import SolutionSection from '../solutionSection/solutionSection'
import Footer from '../../common/footer/footer'
import Header from '../../common/header/header'

const LandingMainPage = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <AboutSection/>
            <MarqueeSection/>
            <InfoSection/>
            <WorkingSection/>
            <SolutionSection/>
            {/* <SubscriptionSection/> */}
            <Footer/>
        </div>
    )
}

export default LandingMainPage