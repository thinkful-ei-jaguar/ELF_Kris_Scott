import React from 'react';
import Summary from './Summary';
import Total from './Total';
import './Cart.css';

function Cart(props){
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <Summary 
        selected={props.selected}
      />
      <Total 
        selected={props.selected}
      />
    </section>
  );
}

export default Cart;