import React from 'react'
import styledComponents from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'

const Container=styledComponents.div``


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper/>
        Cart
    </Container>
  )
}

export default Cart