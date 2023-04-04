import React from "react";
import Card from '../../components/Card'
import {
    ProductWrapper,
    Content
} from './Styled.js'

const Product = () => {
    return(
        <ProductWrapper>
            <Content>
                <Card />
                <Card />
            </Content>
        </ProductWrapper>
    )
}

export default Product