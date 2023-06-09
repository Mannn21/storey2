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
    WrapperItem,
    // Icon
} from './Styled';
import styled from './index.module.css'

const Footer = () => {
  const ListSosmed = () => {
    return Sosmed.map((item, index) => {
      return (
        <SosmedItem key={index}>
          <SosmedLink href={item.location} target="blank" className={styled.sosmed}> {item.title} </SosmedLink>
          {/* <Icon src={item.icon} color={item.color}/> */}
        </SosmedItem>
      );
    });
  };

  return (
    <Container>
      <FooterText>
        <FooterName>Storey</FooterName>
        <FooterSpan>Sedia produk terbaik</FooterSpan>
      </FooterText>
      <SosmedWrapper>
        <WrapperItem>
          <ListSosmed />
        </WrapperItem>
      </SosmedWrapper>
    </Container>
  );
};

export default Footer;
