import React from 'react';

import { CarouselContainer } from '../components/CarouselContainer';
import { Header } from '../components/Header';
import { Products } from '../containers/Products';
import { Sorter } from '../components/Sorter'
const Home = () => {
  return (
      <>
        <Header />
        <CarouselContainer />
        <Sorter />
        <Products />
      </>
  )
}

export { Home };