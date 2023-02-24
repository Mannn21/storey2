import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'
import {
    Container
} from "./Styled"

const Home = () => {
    return (
        <Container>
            <Navbar />
            <Hero />
            <Content />
            <Footer />
        </Container>
    )
}

export default Home