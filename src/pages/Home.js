import React from 'react'
import ContentSection from '../components/Content-section/ContentSection'
import HeroSection from '../components/Hero-section/HeroSection'
import Footer from '../components/Footer/Footer'

const Home = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <>
            <main>
                <HeroSection />
                <ContentSection type={'movie'} heading={'movies'} />
                <ContentSection type={'tv'} heading={'tv shows'}/>
            </main>
            <Footer />
        </>
    )
}

export default Home
