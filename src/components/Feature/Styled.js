import styled from "styled-components";

export const Container = styled.div`
    margin-top: 5px;
    background-color: transparent !important;
    height: 180px;
    width: 100%;

    @media screen and (max-width: 480px) {
        height: 140px;
        margin-top: 20px;
        width: 100%;
    }
    `

export const AboutIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
    @media screen and (max-width: 480px) {
        background: white;
        border-radius: 20px;
        justify-content: space-around;
    }
`

export const AboutIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
    padding: 10px;
    gap: 8px;

    @media screen and (max-width: 480px) {
        justify-content: center;
        padding: 2px;
        gap: 3px;
        width: 20%;
        height: 100%;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    padding: 10px;
    gap: 8px;

    @media screen and (max-width: 480px) {
        padding: 6px;
        gap: 5px;
    }
`

export const Image = styled.img`

    @media screen and (max-width: 480px) {
        width: 55px;
        height: 60px;
    }
`

export const CardLine = styled.hr`
    width: 1.1px;
    background-color: rgba(102, 102, 102, .6);
    height: 120px;
    margin-left: 130px;

    @media screen and (max-width: 480px) {
        position: relative;
        border: 1px solid blue;
        margin: auto;
        top: 10px;
    }
`

export const TitleCard = styled.span`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1.2px;

    @media screen and (max-width: 480px) {
        font-size: 13px;
        text-align: center;
    }
`

export const TextCard = styled.p`
    font-size: 16px;
    width: 80%;
    text-align: center;

    @media only screen and (max-width: 480px) {
        font-size: 13px;
        width: 90%;
        text-align: center;
        margin-left: -3px;
    }
`
export const ImageItem = styled.img`
    @media only screen and (max-width: 480px) {
        width: 60%;
    }
`