import React from "react";
import Item from "../../product.json";
import {
  CardWrapper,
  CategoryWrapper,
  DescWrapper,
  ImageWrapper,
  ItemCategories,
  ItemDesc,
  ItemImage,
  ItemPrice,
  ItemTitle,
  ItemWrapper,
  Link
} from "./Styled";

const Card = () => {
  const Product = () => {
    return Item.products.map((item, index) => {
      return (
        <Link key={index} to="/product/detail">
          <ItemWrapper>
            <CategoryWrapper>
              <ItemCategories>{item.category}</ItemCategories>
            </CategoryWrapper>
            <DescWrapper>
              <ImageWrapper>
                <ItemImage src={item.image} alt={item.title} />
              </ImageWrapper>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>$ {item.price}</ItemPrice>
              <ItemDesc>{item.desc}</ItemDesc>
            </DescWrapper>
          </ItemWrapper>
        </Link>
      );
    });
  };

  return (
    <CardWrapper>
      <Product />
    </CardWrapper>
  );
};

export default Card;
