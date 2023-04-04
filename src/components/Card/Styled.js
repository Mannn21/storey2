import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px 30px;


    @media only screen and (max-width: 480px) {
        gap: 28px 8px;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        gap: 28px 30px;
    }
`

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 7px;
    align-items: center;
    height: 320px;
    width: 200px;
    border-radius: 8px;
    padding: 5px;
    background-color: #fff;
    box-sizing: border-box;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: all ease-in-out .2s;
    }


    @media (max-width: 768px) {
        /* width: calc(50% - 20px); */
        width: 180px;
    }
    
    @media (max-width: 480px) {
        width: 140px;
        margin: 0px;

        &:hover {
        cursor: pointer;
        transform: scale(1.02);
        transition: all ease-in-out .2s;
    }
    }
`

export const CategoryWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

export const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    gap: 6px;
`

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    @media only screen and (max-width: 480px) {
        width: 100px;
        height: 90px;
        padding: 4px 0;
    }

`

export const ItemImage = styled.img`
    height: 120px;
    width: 130px;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 60px;
    }

`
export const ItemTitle = styled.h2`
    font-size: 15px;
    margin: 4px 8px;
    text-align: center;
    letter-spacing: 1.5px;
    color: black;

    @media only screen and (max-width: 480px) {
        padding-top: 2px;
        width: 100%;
        height: 60px;
        font-size: 14px;
    }
`

export const ItemCategories = styled.span`
    font-size: 13px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 1.1px;
    color: black;
`

export const ItemPrice = styled.span `
    font-weight: 700;
    letter-spacing: 1.3px;
    font-size: 18px;
    color: green;
`

export const ItemDesc = styled.p`
    font-size: 14px;
    letter-spacing: 1.1px;
    text-align: center;
    color: black;
    box-sizing: border-box;
`

