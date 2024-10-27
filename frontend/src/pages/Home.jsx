import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <LatestCollection />
            <BestSellers />
            <OurPolicy />
            <NewsLetterBox />
            <Footer />
        </>
    )
}

export default Home
