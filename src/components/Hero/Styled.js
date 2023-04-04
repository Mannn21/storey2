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
    padding-top: 5px;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 40vh;
    }

    @media only screen and (max-width: 850px) and (min-width: 481px) {
        width: 100%;
        height: 38vh;
    }

`

export const HeroImageWrapper = styled.div`
    height: 100%;
    width: 43%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media only screen and (min-width: 481px) and (max-width: 850px){
        width: 50%;
        height: 100%;
    }
`

export const HeroImage = styled.img`
    height: 100%;
    width: 60%;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
    }

    @media only screen and (min-width: 481px) and (max-width: 850px){
        width: 85%;
        height: 100%;
    }
`

export const HeroDetail = styled.div`
    height: 100%;
    width: 57%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media only screen and (max-width: 480px) {
        gap: 12px;
        padding: 10px 8px;
    }

    @media only screen and (min-width: 481px) and (max-width: 850px){
        width: 50%;
        height: 100%;
    }
`

export const HeroDesc = styled.h3`
    font-size: 18px;
    text-align: center;
    margin-bottom: 2px;
    letter-spacing: 1.2px;

    @media only screen and (max-width: 480px) {
        font-size: 13px;
        text-align: center;
        letter-spacing: 1.2px;
        margin-top: -15px;
    }

`

export const HeroText = styled.h3`
    letter-spacing: 2px;
    margin-bottom: 30px;
    margin-top: 10px;

    @media only screen and (max-width: 480px) {
        font-size: 13px;
        text-align: center;
        margin-bottom: 2px;
        letter-spacing: 1.4px;
    }
`

export const HeroButton = styled.span`
    background-color: #2c365a;
    color: white;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 25px;
    letter-spacing: 1.2px;

    @media only screen and (max-width: 480px) {
        background-color: #2c365a;
        color: white;
        font-size: 17px;
        font-weight: 500;
        padding: 7px 20px;
        letter-spacing: 1.2px;
    }
`