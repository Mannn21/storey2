import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Content,
  TableWrapper,
  Title,
  QuantitySpan,
  Count,
  QuantityWrapper,
  HeadWrapper,
  TableHead,
  Image,
  ColumnNumber,
  ColumnImage,
  ColumnProduct,
  ColumnPrice,
  ColumnQuantity,
  Line,
  Navigate,
  ToNavigate
} from "./Styled.js";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 109.95
  const [tPrice, setTotal] = useState(price)

  const minus = () => {
    if (quantity === 0) {
      return (
        setQuantity(0),
        setTotal(0)
      );
    }
    if (quantity !== 0) {
      const newQuantity = quantity - 1
      const newTotal = (newQuantity * price).toFixed(2)
      if(newQuantity === 1) {
        return setQuantity(newQuantity) && setTotal(price)
      }
      if(quantity === 1) {
        return setQuantity(newQuantity) && setTotal(0)
      }
      else return (
        setQuantity(newQuantity),
        setTotal(newTotal)
        );
    }
  };

  const plus = () => {
    const newQuantity = quantity + 1
    const newTotal = (price * newQuantity).toFixed(2)
    if(newQuantity === 1) {
      return (
        setQuantity(newQuantity),
        setTotal(price)
      )
    }
    else return (
      setQuantity(newQuantity),
      setTotal(newTotal)
    )
  }

  return (
    <Container>
      <Navbar />
      <Content>
        <Title> <Line /> CART PAGE <Line /></Title>
        <TableWrapper>
          <table border={1} cellSpacing={0} cellPadding={0}>
            <HeadWrapper>
              <TableHead>No</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Produk</TableHead>
              <TableHead>QTY</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Total</TableHead>
            </HeadWrapper>
            <tbody>
              <tr>
                <ColumnNumber>
                    <span>1</span>
                </ColumnNumber>
                <ColumnImage>
                    <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product"/>
                </ColumnImage>
                <ColumnProduct>
                    <span>Fjallraven - Foldsack No. 1 Backpack</span>
                </ColumnProduct>
                <ColumnQuantity>
                  <QuantityWrapper>
                    <QuantitySpan onClick={() => minus()}>
                      <BiIcons.BiMinus />
                    </QuantitySpan>
                    <Count>{quantity}</Count>
                    <QuantitySpan onClick={() => plus()}>
                      <BiIcons.BiPlus />
                    </QuantitySpan>
                  </QuantityWrapper>
                </ColumnQuantity>
                <ColumnPrice>
                    <span>$ 109.95</span>
                </ColumnPrice>
                <ColumnPrice>
                    <span>$ {tPrice}</span>
                </ColumnPrice>
              </tr>
            </tbody>
            <tbody>
                <td colSpan={5} style={{ textAlign: "center", fontSize: "18px", fontWeight: "700" }}>Subtotal</td>
                <ColumnPrice>
                    <span>$ {tPrice}</span>
                </ColumnPrice>
            </tbody>
          </table>
        </TableWrapper>

        <Navigate>
          <Link to='/product' style={{ textDecoration: "none" }}>
            <ToNavigate><AiIcons.AiOutlineArrowLeft/>Kembali</ToNavigate>
          </Link>

          <Link to='/checkout' style={{ textDecoration: "none" }}>
            <ToNavigate>Checkout<AiIcons.AiOutlineArrowRight/></ToNavigate>
          </Link>
        </Navigate>
      </Content>
      <Footer />
    </Container>
  );
};

export default Cart;
