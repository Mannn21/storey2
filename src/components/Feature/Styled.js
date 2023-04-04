import styled from "styled-components";

export const Container = styled.div`
    margin-top: 30px;
    background-color: transparent !important;
    height: 250px;
    width: 100%;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 40vh;
    }
`

export const AboutIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 40vh;
        padding: 10px 5px 0 3px;
    }
`

export const AboutIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
    padding: 10px;
    gap: 8px;


    @media only screen and (max-width: 480px) {
        padding: 3px;
        gap: 4px;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    padding: 10px;
    gap: 8px;

    @media only screen and (max-width: 480px) {
        padding: 10px 6px 10px 3px;
    }
`

export const CardLine = styled.hr`
    width: 1.1px;
    background-color: rgba(102, 102, 102, .6);
    height: 120px;


    @media only screen and (max-width: 480px) {
        height: 230px;
    }
`

export const TitleCard = styled.span`
    font-size: 20px;
    font-weight: 500;

    @media only screen and (max-width: 480px) {
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        display: inline-block;
        width: 66%;
        margin: auto;
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
export const Image = styled.img`
    @media only screen and (max-width: 480px) {
        width: 60%;
    }
`