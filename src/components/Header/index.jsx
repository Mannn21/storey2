import { useState } from "react";
import { Link } from "react-router-dom";
import IconWrapper from '../Icon'
import * as AiIcons from 'react-icons/ai'

import {
  Container,
  HeaderWrapper,
  Menu,
  MenuBurger,
  MenuItem,
  MenuSearch,
  Title,
  Wrapper,
  NavigateIcon
} from "./Styled";
import styled from "./style.module.css";

const Header = () => {
  const [isShrinkHeader, setIsShrinkHeader] = useState(true);
  // const [filterOption, setFilterOption] = useState({
  //   search: "",
  //   addData: false,
  // });

  const handleSearchSubmit = (e) => {
    alert(e)
    // e.preventDefault();
    // if (filterOption.search === "") return;
    // Router.push({ pathname: "/store", query: filterOption }, undefined);
  };

  const handleSearch = (e) => {
    console.log(e)
    // const newQuery = {
    //   ...filterOption,
    //   search: e.target.value,
    // };
    // setFilterOption(newQuery);
  };

  const toggleShrinkHeader = () => {
    setIsShrinkHeader((state) => !state);
  };

  return (
    <HeaderWrapper height={`${isShrinkHeader}`}>
      <Container>
        <Wrapper>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Title>Storey</Title>
          </Link>
          <Menu>
            <Link href="/store" style={{ textDecoration: "none" }}>
              <MenuItem>Produk</MenuItem>
            </Link>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <MenuItem>About</MenuItem>
            </Link>
          </Menu>
            <NavigateIcon>
              <IconWrapper />
            </NavigateIcon>
          <MenuSearch>
            <form onSubmit={handleSearchSubmit}>
              <input type="text" placeholder="search..." onChange={handleSearch} className={styled.input}/>
            </form>
          </MenuSearch>
          <MenuBurger>
            <AiIcons.AiOutlineMenu size={23} onClick={toggleShrinkHeader} />
          </MenuBurger>
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;