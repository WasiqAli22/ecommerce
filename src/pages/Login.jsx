import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://png.pngtree.com/thumb_back/fh260/background/20200805/pngtree-digital-connections-system-sphere-and-global-data-exchanges-on-black-and-image_383937.jpg")
      center;
      /* " https://png.pngtree.com/thumb_back/fh260/background/20200805/pngtree-digital-connections-system-sphere-and-global-data-exchanges-on-black-and-image_383937.jpg" */
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 25%;
  background-color: white;
  padding: 20px;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-bottom: 5px;
  background-color: teal;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
const Link=styled.a`
   margin: 5px 0px;
   font-size: 12px;
   text-decoration:underline;
   cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="password" />
          <Button>SIGN IN</Button>
          <Link>FORGET PASSWORD</Link>
          <Link>CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login