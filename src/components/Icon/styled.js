import styled from "styled-components"

export const NavbarIcon = styled.li`
    font-size: 24px;
    font-weight: 600;
    color: black;
    list-style: none;

    &:hover {
        color: #455db4;
        transform: scale(1.1);
        transition: all ease-in-out .2s;
    }

    @media screen and (max-width: 480px) {
        font-size: 22px;   
    }
`