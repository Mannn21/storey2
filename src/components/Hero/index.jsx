import React from "react";
import { Link } from "react-router-dom";
import {    
    HeroDetail,
    HeroDesc,
    HeroButton,
    HeroText,
    HeroImageWrapper,
    HeroImage,
    Container
} from './Styled'
import Image from '../../assets/hero-1-new.png'
import Banner from '../../assets/hero.webp'

const Hero = () => {
    return (
        <Container src={Banner}>
            <HeroImageWrapper>
                <HeroImage src={Image} alt="heroImage" />
            </HeroImageWrapper>
            <HeroDetail>
                <HeroDesc>Menyediakan produk berkualitas dan harga yang terjangkau.</HeroDesc>
                <HeroText>Temukan berbagai produk kami</HeroText>
                <Link to='/product' style={{ textDecoration: "none" }}>
                    <HeroButton>Disini</HeroButton>
                </Link>
            </HeroDetail>
        </Container>
    )
}

export default Hero