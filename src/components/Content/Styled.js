import styled from "styled-components";

export const ContentWrapper = styled.div`
    margin-top: 50px;
    padding: 0 50px;

    @media only screen and (max-width: 480px) {
        padding: 30px 5px;
    
    }
    @media only screen and (min-width: 481px) and (max-width: 768px){
        padding: 30px 5px;
    }

`

export const ContentHeader = styled.h1`
    margin: 0 0 40px 20px;
`