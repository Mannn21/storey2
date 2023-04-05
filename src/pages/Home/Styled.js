import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding: 0 0 120px 0;
    margin: 0;
    background-color: #e4e6f0;

    @media screen and (max-width: 480px) {
        padding-bottom: 10px;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
        padding-bottom: 40px;
    }
`;

export const Title = styled.h1`
    color: red;
`;