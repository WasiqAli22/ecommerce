import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`margin: 20px;`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    `;
const Filter = styled.div`margin: 20px;`;

const ProductList = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>Filter1</Filter>
        <Filter>Filter2</Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/> 
      <Footer/>
    </>
  );
};

export default ProductList;