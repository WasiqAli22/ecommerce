import React from 'react'
import  styled  from 'styled-components'

const Container=styled.div`
   flex: 1;
   margin:3px;
   height: 70vh;
   position: relative;
    `
const Image=styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    `
const Info=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;

`
const Title =styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button =styled.button`
    cursor: pointer;
    background-color: white;
    padding: 10px;
    border: none;
    font-weight: 600;
    color: gray;
    :hover{
        background-color: black;
        color: white;
    }
`


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem