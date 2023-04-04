import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
    ActionWrapper,
    DetailWrapper,
    Content,
    DescriptionWrapper,
    DescriptionProduct,
    DetailProduct,
    ReviewWrapper,
    ReviewProduct,
    RecomendWrapper,
    Title,
    TitleProduct,
    Image,
    ImageWrapper,
    PriceProduct,
    CategoryProduct,
    QuantityWrapper,
    QuantitySpan,
    ActionSpan,
    Count
} from './Styled.js'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as HiIcons from 'react-icons/hi'
import * as MdIcons from 'react-icons/md'
import styled from './index.module.css'

const Detail = () => {
    const [quantity, setQuantity] = useState(0)

    const minus = () => {
        if(quantity === 0) {
            return setQuantity(0)
        }
        if(quantity !== 0) {
            return setQuantity(quantity - 1)
        }
    }

    return(
        <DetailWrapper>
            <Content>
                <Title>Detail Page</Title>
                <DetailProduct>
                    <ImageWrapper>
                        <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product" />
                    </ImageWrapper>
                    <DescriptionWrapper>
                        <CategoryProduct>men's clothing</CategoryProduct>
                        <TitleProduct>Fjallraven - Foldsack No. 1 Backpack</TitleProduct>
                        <PriceProduct>$ 109.95</PriceProduct>
                        <ReviewProduct><AiIcons.AiFillStar style={{ color: "orange" }}/> 3.9 / 5.0</ReviewProduct>
                        <DescriptionProduct>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus culpa voluptatum maiores hic fugiat quasi illo officiis harum sint modi.</DescriptionProduct>
                        <ActionWrapper>
                            <QuantityWrapper>
                                <QuantitySpan onClick={() => minus()}><BiIcons.BiMinus /></QuantitySpan>
                                <Count>{quantity}</Count>
                                <QuantitySpan onClick={() => setQuantity(quantity+1)}><BiIcons.BiPlus /></QuantitySpan>
                            </QuantityWrapper>
                            <Link className={styled.icon} to='/cart'><ActionSpan><HiIcons.HiOutlineShoppingCart /></ActionSpan></Link>
                            <Link className={styled.icon} to='/favorite'><ActionSpan><MdIcons.MdOutlineFavoriteBorder /></ActionSpan></Link>
                        </ActionWrapper>
                    </DescriptionWrapper>
                </DetailProduct>
                <ReviewWrapper>
                    <h1>Review Page</h1>
                </ReviewWrapper>
                <RecomendWrapper>
                    <h1>Recomend Page</h1>
                </RecomendWrapper>
            </Content>
        </DetailWrapper>
    )
}

export default Detail