import styled from "styled-components";

export const DetailWrapper = styled.div`
    background-color: #e4e6f0;
    margin: 0;
    padding: 0 0 120px 0;
`

export const Content = styled.div`
    padding: 80px 20px 0 20px;
`

export const Title = styled.h1`
    font-size: 25px;
    font-weight: 600;
`

export const DetailProduct = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    heigth: auto;
    gap: 50px;
    background-color: #fff;
    border-radius: 10px;
    justify-content: space-evenly;
`

export const ImageWrapper = styled.div`
    height: 450px;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
    box-sizing: border-box;
`

export const Image = styled.img`
    height: 80%;
    width: 45%;
`

export const DescriptionWrapper = styled.div`
    padding: 10px 100px 10px 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2px;
    width: 40%;
`

export const TitleProduct = styled.h3`
    font-size: 23px;
    font-weight: 600px;
    letter-spacing: 1.2px;
    margin-top: 20px;
`

export const PriceProduct = styled.span`
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: green;
`

export const DescriptionProduct = styled.p`
    letter-spacing: 1.2px;
    font-size: 16px;
    width: 90%;
`

export const ReviewProduct = styled.span`
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1.3px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
`

export const CategoryProduct = styled.span`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: #2c365a;
`

export const ActionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: flex-start;
    align-items: center;
`

export const QuantityWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 12px;
    border: 1px solid #777;
    padding: 3px 5px;
    box-sizing: border-box;
`

export const QuantitySpan = styled.span`
    font-size: 20px;
    margin-bottom: -1px;
    cursor: pointer;
`

export const Count = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: -1px;
    display: inline-block;
    width: 35px;
    text-align: center;
`

export const ActionSpan = styled.span`
    font-size: 25px;
    margin-bottom: -5px;
    cursor: pointer;
`

export const ReviewWrapper = styled.div`
    display: flex;
`

export const RecomendWrapper = styled.div`
    display: flex;
`