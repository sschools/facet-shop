import React, {Component} from 'react'

import CartItem from "./CartItem"

export default class Cart extends Component {

  render() {
    return (
      <div className="shopping-cart">
        <div className="cart-header">
          <i>shoping cart icon here</i>
          <h3>Shopping Cart</h3>
        </div>
        <div className="item-catcher">
          <ul>
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Remove</li>
          </ul>
          <CartItem/>
        </div>
        <div>
          <h3>Total: </h3>
          <button>Empty Cart</button>
        </div>
      </div>
    )
  }
}
