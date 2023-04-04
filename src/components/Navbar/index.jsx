import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../list/NavbarIcon.js";
import {
  Container,
  LeftNavbar,
  NavbarIcon,
  Navigate,
  NavigateIcon,
  NavigateList,
  NavigateSearch,
  NavigateWrapper,
  RightNavbar,
  Title,
} from "./styled.js";
import styled from './index.module.css'

const Navbar = () => {

    const IconWrapper = () => {
        return (
            Icon.map((item, index) => {
                return (
                    <Link key={index} to={item.location}>
                        <NavbarIcon>
                            {item.icon}
                        </NavbarIcon>
                    </Link>
                )
            })
        )
    }

  return (
    <Container>
      <RightNavbar>
        <Title>
          <Link to="/" style={{ textDecoration: "none" }}>Storey</Link>
        </Title>
        <NavigateWrapper>
          <Navigate>
            <Link to='/product' style={{ textDecoration: "none" }}>
                <NavigateList>Produk</NavigateList>
            </Link>

            <Link to="/about" style={{ textDecoration: "none" }}>
                <NavigateList>About</NavigateList>
            </Link>
          </Navigate>
        </NavigateWrapper>
      </RightNavbar>

      <LeftNavbar>
        <NavigateSearch>
            <input type="text" placeholder="search..." className={styled.input}/>
        </NavigateSearch>
        <NavigateIcon>
            <IconWrapper />
        </NavigateIcon>
      </LeftNavbar>
    </Container>
  );
};

export default Navbar;
