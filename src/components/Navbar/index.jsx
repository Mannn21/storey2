import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../list/NavbarIcon.js";
import * as AiIcons from 'react-icons/ai'
import {
  Container,
  LeftNavbar,
  NavbarIcon,
  MenuBurger,
  Navigate,
  NavigateIcon,
  NavigateList,
  NavigateSearch,
  NavigateWrapper,
  RightNavbar,
  Title,
  HeaderWrapper
} from "./styled.js";
import styled from './index.module.css'

const Navbar = () => {

  const [isShrinkHeader, setIsShrinkHeader] = useState(true);

  const toggleShrinkHeader = () => {
    setIsShrinkHeader((state) => !state);
  };

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
    <Container height={`${isShrinkHeader}`}>
      <HeaderWrapper>

        <RightNavbar>
          <MenuBurger>
            <AiIcons.AiOutlineMenu onClick={toggleShrinkHeader}/>
          </MenuBurger>
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
              <AiIcons.AiOutlineSearch className={`${styled.searchIcon}`} />
              <IconWrapper />
          </NavigateIcon>
        </LeftNavbar>
      </HeaderWrapper>
    </Container>
  );
};

export default Navbar;
