import React from 'react';
import { Carrousel } from '../components/Carrousel';

import { Products } from '../containers/Products';

const Home = () => {
  return (
      <>
        <Carrousel />
        <Products />
      </>
  )
}

export { Home };