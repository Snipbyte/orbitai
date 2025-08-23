import React from 'react'
import Footer from '../../common/footer/footer'
import ProductsSection from '../productsSection/productsSection'
import HeroSection from '../heroSection/heroSection'
import Header from '../../common/header/header'

const OurProductsMainPage = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <ProductsSection/>
            <Footer/>
        </div>
    )
}

export default OurProductsMainPage