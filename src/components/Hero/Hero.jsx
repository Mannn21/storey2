import React from "react";
import { Link } from "react-router-dom";
import {    
    HeroDetail,
    HeroDesc,
    HeroButton,
    HeroText,
    HeroImage,
    Container
} from './Styled'
import Image from '../../assets/hero-1-new.png'

const Hero = () => {
    return (
        <Container>
            <HeroDetail>
                <HeroImage src={Image} alt="heroImage" />
            </HeroDetail>
            <HeroDetail>
                <HeroDesc>Kami menyediakan produk berkualitas dan harga yang terjangkau.</HeroDesc>
                <HeroText>Temukan berbagai produk kami</HeroText>
                <Link to='/product' style={{ textDecoration: "none" }}>
                    <HeroButton>Disini</HeroButton>
                </Link>
            </HeroDetail>
        </Container>
    )
}

export default Hero