import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import {
    ProductWrapper,
    Content
} from './Styled.js'

const Product = () => {
    return(
        <ProductWrapper>
            <Navbar />
            <Content>
                <Card />
                <Card />
            </Content>
            <Footer />
        </ProductWrapper>
    )
}

export default Product