import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 160px;
    padding: 20px 70px;
    box-sizing: border-box;
    background-color: #fff;
    border-top: 1px solid #c4dbe1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 480px) {
        padding: 8px;
        height: 110px;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        height: 140px;
        padding: 15px 10px;
    }
`

export const FooterText = styled.div`
    padding: 10px;

    @media only screen and (max-width: 480px) {
        width: 70%;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        margin-top: -11px;
    }
`

export const FooterName = styled.h2`
    color: #2c365a;
    font-size: 27px;
    letter-spacing: 3px;
    font-weight: 800;

    @media only screen and (max-width: 480px) {
        font-size: 24px;
    }
`

export const FooterSpan = styled.span`
    letter-spacing: 1.3px;
    font-size: 18px;
    font-weight: 600;

    @media only screen and (max-width: 480px) {
        font-size: 13px;
    }
` 

export const SosmedWrapper = styled.div`
    padding: 10px;

    @media only screen and (max-width: 480px) {
        width: 35%;
    }
`

export const WrapperItem = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

    @media only screen and (max-width: 480px) {
        gap: 10px;
    }
`

export const SosmedItem = styled.li`
    list-style: none;
`

export const SosmedLink = styled.a`
    color: #434343;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1.3px;

    &:hover {
        color: #455db4;
    }

    @media only screen and (max-width: 480px) {
        font-size: 14px;
    }
`

export const Icon = styled.img`
    background: ${props => props.color};
`