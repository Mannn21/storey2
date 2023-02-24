import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Payment } from "../../list/Payment";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Content,
  Title,
  TableWrapper,
  Table,
  TableHead,
  TableBody,
  HeadColumn,
  BodyRow,
  BodyColumn,
  FormWrapper,
  Form,
  Input,
  Area,
  DropdownWrapper,
  ItemHolder,
  Selections,
  DropdownItem,
  ItemName,
  Image,
  False,
  ValueColumn,
  Navigate,
  ToNavigate
} from "./Styled";

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectItem, setSelectItem] = useState("");
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")
  const menuRef = useRef();
  const dropdownRef = useRef();

  const ListPayment = () => {
    return Payment.map((item, index) => {
      return (
        <DropdownItem
          className="dropdown-item"
          onClick={() => {
            setSelectItem(item.value);
          }}
          key={index}
        >
          <ItemName>{item.name}</ItemName>
          <Image src={item.image} alt={item.name} />
        </DropdownItem>
      );
    });
  };

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== dropdownRef.current) {
      setIsOpen(false);
    }
  });

  const handleName = (e) => {
    setName(e)
  }

  const handleAddress = (e) => {
    setAddress(e)
  }
  const handleMessage = (e) => {
    setMessage(e)
  }

  return (
    <Container>
      <Navbar />
      <Content>
        <Title>Checkout Product</Title>
        <TableWrapper>
          <FormWrapper>
            <Form>
              <label htmlFor="name">Masukkan Nama</label>
              <Input type="text" placeholder="Harap masukkan nama dengan benar" id="name" onChange={(e) => handleName(e.target.value)} autoComplete="off" required/>
            </Form>
            <Form>
              <label htmlFor="address">Masukkan Alamat</label>
              <Area type="text" placeholder="Harap masukkan alamat dengan benar" id="address" onChange={(e) => handleAddress(e.target.value)} minLength={10} maxLength={120} required/>
            </Form>
            <Form>
              <label htmlFor="message">Masukkan Pesan</label>
              <Area type="text" placeholder="Masukkan pesan untuk penjual" id="address" onChange={(e) => handleMessage(e.target.value)} maxLength={120} required/>
            </Form>
            <Form>
              <label>Masukkan Metode Pembayaran</label>
              <div>
                <DropdownWrapper>
                  <Selections
                    ref={dropdownRef}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {selectItem !== ""
                      ? selectItem
                      : "Masukkan metode pembayaran"}
                  </Selections>
                  <ItemHolder ref={menuRef}>
                    {isOpen === true ? <ListPayment /> : <False></False>}
                  </ItemHolder>
                </DropdownWrapper>
              </div>
            </Form>
          </FormWrapper>
          <Table>
            <TableHead>
              <BodyRow>
                <HeadColumn>Detail</HeadColumn>
                <HeadColumn>Nilai</HeadColumn>
              </BodyRow>
            </TableHead>

            {/* Identitas */}

            <TableBody>
              <BodyRow>
                <BodyColumn>Nama Penerima</BodyColumn>
                <ValueColumn >{name}</ValueColumn>
              </BodyRow>
              <BodyRow>
                <BodyColumn>Alamat Penerima</BodyColumn>
                <ValueColumn>{address}</ValueColumn>
              </BodyRow>
              <BodyRow>
                <BodyColumn>Metode Pembayaran</BodyColumn>
                <ValueColumn >{selectItem}</ValueColumn>
              </BodyRow>
              <BodyRow>
                <BodyColumn>Pesan</BodyColumn>
                <ValueColumn>{message}</ValueColumn>
              </BodyRow>
            </TableBody>

            {/* Product */}
            <hr />
            <TableBody>
              <BodyRow>
                <BodyColumn>Product 1</BodyColumn>
                <ValueColumn style={{ textAlign: "center" }}>$ 109.95</ValueColumn>
              </BodyRow>
            </TableBody>

            {/* Total */}
            <hr />
            <TableBody>
              <BodyRow>
                <BodyColumn>Total</BodyColumn>
                <ValueColumn style={{ textAlign: "center" }}>$ 190.95</ValueColumn>
              </BodyRow>
            </TableBody>
          </Table>
        </TableWrapper>
        <Navigate>
            <Link to='/cart' style={{ textDecoration: "none" }}>
                <ToNavigate> Kembali </ToNavigate>
            </Link>

            {
                name === "" || address === "" || selectItem === "" || address.length < 10 ? 
                <></> : 
                <Link to='/checkout' style={{ textDecoration: "none" }}>
                    <ToNavigate> $109.95 Lanjutkan </ToNavigate>
                </Link>
            }
        </Navigate>
      </Content>
      <Footer />
    </Container>
  );
};

export default Checkout;
