import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    /* height: 70px; */
    background-color: #fff;
    z-index: 999;
    box-sizing: border-box;
    border-bottom: 1px solid #c4dbe1;
    white-space: nowrap;
    transition: 0.2s;

    @media screen and (max-width: 480px) {
        height: ${(props) => (props?.height === "true" ? "70px" : "310px")};
    }
`

export const HeaderWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;

  @media (max-width: 1400px) {
    max-width: 1250px;
  }

  @media (max-width: 992px) {
    max-width: 800px;
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    max-width: 800px;
    border: 1px solid blue;
  }
`;


export const RightNavbar = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 480px) {
        gap: 20px;
        padding-left: 30px;
    }
`

export const LeftNavbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 45%;
    height: 100%;

    @media screen and (max-width: 480px) {
        width: 40%;
    }
`

export const Title = styled.h1`
    color: #2c365a;
    font-size: 26px;
    letter-spacing: 3px;
    font-weight: 800;

    @media screen and (max-width: 480px) {
        font-size: 22px;
    }
`

export const NavigateWrapper = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 480px) {
        /* display: none; */
    }
`

export const Navigate = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media screen and (max-width: 480px) {
        margin-left: 0;
        flex-direction: column;
        margin-top: 25px;
    }
`

export const NavigateList = styled.li`
    list-style: none;
    font-size: 16px;
    font-weight: 600;
    color: black;
    letter-spacing: 1.3px;

    &:hover {
        color: #455db4;
        transform: scale(1.1);
        transition: all ease-in-out .2s;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;   
    }
`

export const NavigateSearch = styled.div`
    width: 300px;
    height: 30px;

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const NavigateIcon = styled.ul`
    width: 20%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    gap: 30px;

    @media screen and (max-width: 480px) {
        gap: 12px;
        width: 100%;
    }
`

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
        font-size: 20px;   
    }
`

export const MenuBurger = styled.div`
    display: none; 

    @media screen and (max-width: 480px) {
        display: block;
        position: absolute;
        padding-left: 12px;
        left: 0;
        top: 1em;
        cursor: pointer;
    }
`