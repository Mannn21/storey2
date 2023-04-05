import React from 'react'
import Hero from '../../components/Hero'
import Content from '../../components/Content'
import {
    Container
} from "./Styled"

const Home = () => {
    return (
        <Container>
            <Hero />
            <Content />
        </Container>
    )
}

export default Home