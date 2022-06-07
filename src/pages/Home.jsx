import React from 'react';
import { CarouselContainer } from '../containers/CarouselContainer';

import { Products } from '../containers/Products';

const Home = () => {
  return (
      <>
        <CarouselContainer />
        <Products />
      </>
  )
}

export { Home };