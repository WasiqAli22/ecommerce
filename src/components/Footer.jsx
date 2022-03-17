import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo=styled.h1``
const Desc=styled.p`
    margin: 20px 0px;
`
const SocialContainer=styled.div`
  display: flex;
`
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${(props)=>props.color};
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    display: flex;
    
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.li`
    /* width: 50%; */
    margin-bottom: 20px;
    list-style: none;
    display: flex;
 
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const Payment = styled.img`
    cursor: pointer;
    width: 50%;
`


const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>Outfitnest</Logo>
          <Desc>Some businesses think they should be in it, but don’t know where to start. Others think all you need is a URL and a Web site and you’re in business.</Desc>
          <SocialContainer>
              <SocialIcon color="3B5999"><Facebook/></SocialIcon>
              <SocialIcon color="E4405F"><Instagram/></SocialIcon>
              <SocialIcon color="55ACEE"><Twitter/></SocialIcon>
              <SocialIcon color="E60023"><Pinterest/></SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
          <Title>Useful Links</Title>
          <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
           <ContactItem> <Room style={{marginRight:"10px"}} /> Khayaban-e-Sehar Shahbaz Com&#39;l D.H.A. Sindh, Karachi, Pakistan</ContactItem> 
           <ContactItem> <Phone style={{marginRight:"10px"}}/>+92 3162920921</ContactItem> 
           <ContactItem> <MailOutline style={{marginRight:"10px"}}/>wasiq@gmail.com</ContactItem> 
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
           
      </Right>
    </Container>
  );
};

export default Footer;
