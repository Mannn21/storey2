import styled from "styled-components";

export const Container = styled.div`
    margin-top: 30px;
    background-color: transparent !important;
    height: 250px;
    width: 100%;
`

export const AboutIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const AboutIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
    padding: 10px;
    gap: 8px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    padding: 10px;
    gap: 8px;
`

export const CardLine = styled.hr`
    width: 1.1px;
    background-color: rgba(102, 102, 102, .6);
    height: 120px;
`

export const TitleCard = styled.span`
    font-size: 20px;
    font-weight: 500;
`

export const TextCard = styled.p`
    font-size: 16px;
    width: 80%;
    text-align: center;
`
