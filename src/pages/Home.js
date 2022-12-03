import React from 'react'
import ContentSection from '../components/Content-section/ContentSection'
import HeroSection from '../components/Hero-section/HeroSection'

const Home = () => {
    return (
        <main>
            <HeroSection />
            <ContentSection type={'movie'} heading={'movies'} />
            <ContentSection type={'tv'} heading={'tv shows'}/>
        </main>
    )
}

export default Home
