import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 450px;
    margin-top: 75px;
    box-sizing: border-box;
    background: url(${props => props.src});
    background-size: cover;
    padding-top: 2px;

    @media screen and (max-width: 480px) {
        height: 30vh;
        justify-content: space-evenly;
    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
        height: 40vh;
        justify-content: space-evenly;
    }
`

export const HeroImageWrapper = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media screen and (max-width: 480px) {
        width: 45%;
    }
`

export const HeroImage = styled.img`
    height: 100%;
    width: 60%;

    @media screen and (max-width: 480px) {
        width: 100%;
    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
        width: 95%;
    }
`

export const HeroDetail = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;

    @media screen and (max-width: 480px) {
        width: 55%;
        padding: 6px 3px;
    }
`

export const HeroDesc = styled.h3`
    font-size: 18px;
    text-align: center;
    margin-bottom: 2px;
    letter-spacing: 1.2px;

    @media screen and (max-width: 480px) {
        font-size: 11px;
        letter-spacing: 1.1px;
    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
        font-size: 17px;   
    }
`

export const HeroText = styled.h3`
    letter-spacing: 2px;
    margin-bottom: 30px;
    margin-top: 10px;

    @media screen and (max-width: 480px) {
        font-size: 13px;
        text-align: center;
    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
        text-align: center;   
    }
`

export const HeroButton = styled.span`
    background-color: #2c365a;
    color: white;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 25px;
    letter-spacing: 1.2px;

    @media screen and (max-width: 480px) {
        padding: 4px 13px;
        font-size: 16px;
    }
`