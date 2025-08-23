import React from 'react'
import Footer from '../../common/footer/footer'
import HeroSection from '../heroSection/heroSection'
import SolutionSection from '../solutionSection/solutionSection'
import FeaturedSection from '../featuredSection/featuredSection'
import TeamSection from '../teamSection/teamSection'
import Header from '../../common/header/header'

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