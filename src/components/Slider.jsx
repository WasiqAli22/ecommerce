import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import {sliderItems} from '../data';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  /* overflow: hidden; */
  /* background-color: orange; */
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  /* background-color: #ff99cc; */
  :hover {
    background-color: #ff99cc;
    /* background-color: #00ffff; */
  }
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
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.sliderIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5fafd;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  /* margin-left: 90px; */
  margin-top: 2px;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
  width: 100%;
`;
const InfoContainer = styled.div`
  /* flex: 1; */
  padding: 50px;
`;
const Title = styled.h1``;
const Desc = styled.p``;
const Button = styled.button``;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handle = (direction) => {
  if(direction==="left"){
    setSliderIndex(sliderIndex>0?sliderIndex-1:4);
  }
  if(direction==="right"){
    setSliderIndex(sliderIndex<4?sliderIndex+1:0);
  }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handle("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map(items=>(
          <Slide>
          <ImgContainer>
            <Image src={items.img} />
          </ImgContainer>
        </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handle("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
