import React from 'react';

import '../styles/components/Product.css'

const Product = ({ product }) => {
  return (
    <div className='product'>
        <figure className='product__imagePicture'>
            <img src={product.attributes.image} alt={product.attributes.title} className='product__image' />
        </figure>
        <div className='product__description'>
            <p>{product.attributes.title} - {product.attributes.artist}</p>
            <p>${product.attributes.Price}</p>
        </div>
    </div>
  )
}

export { Product };