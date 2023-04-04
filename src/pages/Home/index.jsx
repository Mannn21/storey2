import React from 'react'
import Hero from '../../components/Hero'
import Content from '../../components/Content'
import Feature from '../../components/Feature'
import {
    Container
} from "./Styled"

const Home = () => {
    return (
        <Container>
            <Hero />
            <Feature />
            <Content />
        </Container>
    )
}

export default Home