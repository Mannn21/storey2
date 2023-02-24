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
    background-color: white;
    padding-top: 5px;
`

export const HeroImage = styled.img`
    height: 100%;
    width: 60%;
`

export const HeroDetail = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const HeroDesc = styled.h3`
    font-size: 18px;
    text-align: center;
    margin-bottom: 2px;
    letter-spacing: 1.2px;
`

export const HeroText = styled.h3`
    letter-spacing: 2px;
    margin-bottom: 30px;
    margin-top: 10px;
`

export const HeroButton = styled.span`
    background-color: #2c365a;
    color: white;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 25px;
    letter-spacing: 1.2px;
`