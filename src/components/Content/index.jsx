import React from "react";
import Card from "../Card";
import { 
    ContentWrapper,
    ContentHeader
} from "./Styled";

const Content = () => {
    return (
        <ContentWrapper>
            <ContentHeader>Product</ContentHeader>
            <Card />
        </ContentWrapper>
    )
}

export default Content