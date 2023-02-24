import React from "react";
import { Sosmed } from "../../list/FooterList";
import {
    Container,
    FooterText,
    FooterSpan,
    FooterName,
    SosmedItem,
    SosmedLink,
    SosmedWrapper,
    WrapperItem
} from './Styled';
import styled from './index.module.css'

const Footer = () => {
  const ListSosmed = () => {
    return Sosmed.map((item, index) => {
      return (
        <SosmedItem key={index}>
          <SosmedLink href={item.location} target="blank" className={styled.sosmed}> {item.title} </SosmedLink>
        </SosmedItem>
      );
    });
  };

  return (
    <Container>
      <FooterText>
        <FooterName>Storey</FooterName>
        <FooterSpan>Menyediakan produk terbaik</FooterSpan>
      </FooterText>
      <SosmedWrapper>
        <WrapperItem>
          <ListSosmed />
          <span>Logo <a href='https://pngtree.com' style={{ textDecoration: "none", color: "black" }}>Logo from pngtree.com</a></span>
        </WrapperItem>
      </SosmedWrapper>
    </Container>
  );
};

export default Footer;
