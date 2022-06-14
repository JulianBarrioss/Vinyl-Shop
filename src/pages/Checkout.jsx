import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import { Header } from '../components/Header';
import { CheckoutProduct } from '../components/CheckoutProduct';
import '../styles/pages/Checkout.css';

const Checkout = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <Header />
      <div className='checkout'>
        <div className="checkout__products-container">
          <span className='checkout__products-title-container'>
            <h2 className='checkout__products-title'>Your Shopping Cart</h2>
          </span>
          {state.cart.length === 0 && <p className='checkout__empty-cart'>your cart is empty, <a href="/">go back to add something...</a></p>}
          {state.cart.map((product, index) => (
           <CheckoutProduct product={product} indexValue={index} key={index}/>
          ))}
        </div>
        <div className="checkout__amount">
          <div className='checkout__amount-container'>
            <p className='checkout__subtotal'>{`Subtotal (${state.cart.length} items):`} </p>
            <p className='checkout__subtotal-price'> ${state.total}</p>
            <button type='button' className='checkout__proceed-button'>Proceed</button>
          </div>
        </div>
      </div>
    </>
    
  )
}

export { Checkout }