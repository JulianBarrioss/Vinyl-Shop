import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import '../styles/components/Product.css'

const Product = ({ product }) => {
  return (
    <div className='product'>
        <figure className='product-figure'>
            <img src={product.attributes.image} alt={product.attributes.title} className='product__image' />
        </figure>
        <div className='product-div'>
            <p className='product-div-title'> {product.attributes.title}</p>
            <p>{product.attributes.artist}</p>
            <p>${product.attributes.Price}</p>
        </div>
        <AddIcon className='product-addIcon' fontSize='large'/>
    </div>
  )
}

export { Product };