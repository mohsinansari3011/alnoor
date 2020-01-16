import { CartContext } from '../../context/CartContext';
import React from 'react';

export default class Totalcart extends React.Component {
    state = {  }
    render() {
        return (
            <CartContext.Consumer>
        {cart =>{
          if (cart.items && cart.items.length > 0) {
            console.log('cart.items.length',cart.items.length);
            {cart.items.length}
          }
        }}
        </CartContext.Consumer>  
        );
    }
}
