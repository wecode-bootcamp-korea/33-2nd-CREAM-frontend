import React from 'react';
import styled from 'styled-components';
import Carousel from './components/carousel/Carousel';
import ItemList from './components/itemList/ItemList';

function Main() {
  return (
    <MainWrapper>
      <Carousel />
      <ItemList />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  margin-top: 5rem;
`;

export default Main;
