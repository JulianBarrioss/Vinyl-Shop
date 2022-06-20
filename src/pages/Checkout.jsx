import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

import { AppContext } from '../context/AppContext';
import { Header } from '../components/Header';
import { CheckoutProduct } from '../components/CheckoutProduct';
import '../styles/pages/Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { state, setState } = useContext(AppContext);
  const [proceededClass, setProceededClass] = useState(false);
  const [text, settext] = useState('');

  const auth = getAuth();

  const proceedPurchase = () => {
    auth.currentUser === null && navigate('/checkout/login')

    settext(
      state.total ? 'Thanks for your purchase' : 'Your cart is empty!'
    )
    setState({
      cart: [],
      total: 0
    })
    setProceededClass(true)
    setTimeout(() => setProceededClass(false), [4000]);
  }

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
            <button type='button' className='checkout__proceed-button'onClick={proceedPurchase}>Proceed</button>
          </div>
          <div className={proceededClass ? 'proceeded' : 'proceed'}>
            { text }
          </div>
        </div>
      </div>
    </>
    
  )
}

export { Checkout }