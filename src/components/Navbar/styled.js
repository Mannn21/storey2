import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: #fff;
    z-index: 999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #c4dbe1;
`

export const RightNavbar = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
`

export const LeftNavbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 45%;
    height: 100%;
`

export const Title = styled.h1`
    color: #2c365a;
    font-size: 26px;
    letter-spacing: 3px;
    font-weight: 800;
`

export const NavigateWrapper = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const Navigate = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
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
`

export const NavigateSearch = styled.div`
    width: 300px;
    height: 30px;
`

export const NavigateIcon = styled.ul`
    width: 20%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    gap: 30px;
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
`