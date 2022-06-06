import React from 'react'

import { Product } from '../components/Product';
import initalState from '../initalState';

import '../styles/components/Products.css'

const Products = () => {
    const products = initalState.data;
  return (
    <div className='products'>
        {products.map((product) => (
            <Product product={product} key={product.id}/>
        ))}
    </div>
  )
}

export { Products };