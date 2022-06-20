import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import AddIcon from '@mui/icons-material/Add';


import { AppContext } from '../context/AppContext';
import '../styles/components/Modal.css'

const Modal = ({ product, modalState, setModalState, setNotificationState,}) => {
  const { addToCart } = useContext(AppContext);
  if(!modalState) return null

  const notificationHandle = (product) => {
    addToCart(product);
    setNotificationState(true)
    setTimeout(() => setNotificationState(false), [4000]);
    setModalState(!modalState)
  };

  return ReactDom.createPortal (
    <>
    <div className='background' 
    onClick={() => setModalState(!modalState)} 
    ></div>
    <div className='modal'>
    <div className='modal-product'>
        <figure className='modal-product-figure'>
            <img src={product.attributes.image} alt={product.attributes.title} className='modal-product__image' />
        </figure>
        <div className='modal-product-div'>
            <p className='modal-product-div-title'> {product.attributes.title}</p>
            <p className='modal-product-div-artist ' >{product.attributes.artist}</p>
            <p className='modal-product-div-description '>{product.attributes.description}</p>
            <p className='modal-product-div-price '>${product.attributes.Price}</p>
            <button className='modal-product-div-button' onClick={() => {
              notificationHandle(product)
            }
              }>Add to Cart <AddIcon className='modal-product-addIcon' /></button>
            
        </div>
        <AddIcon className='close' fontSize='large' onClick={() => setModalState(!modalState)}/>
    </div>
    </div>
    </>,
    document.getElementById('modal')
  )
}

export { Modal }