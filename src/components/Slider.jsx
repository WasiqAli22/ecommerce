import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  /* background-color: orange; */
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
`;
const Wrapper = styled.div`
  height: 100%;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
 height: 100%;
  flex: 1;
`;
 const Image = styled.image`
    height: 80px;
    width: 100px;
    flex:1;
`;
const InfoContainer = styled.div`
   flex: 1;
  padding: 50px;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
          <Slide>
          <ImgContainer>
            <Image src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        </ImgContainer>
        <InfoContainer></InfoContainer>
          </Slide>
        
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
