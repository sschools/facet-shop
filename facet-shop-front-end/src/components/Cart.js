import React, {Component} from 'react'

import CartItem from "./CartItem"

export default class Cart extends Component {

  render() {
    return (
      <div className="card bg-light shopping-cart">
        <div className="card-header cart-header">
          <i>shoping cart icon here</i>
          <h3>Shopping Cart</h3>
        </div>
        <div className="item-catcher">
          <ul className="d-flex">
            <li className="list-group-item border-0 col-3">Product</li>
            <li className="list-group-item border-0 col-3">Price</li>
            <li className="list-group-item border-0 col-3">Quantity</li>
            <li className="list-group-item border-0 col-3">Remove</li>
          </ul>
          
          <CartItem/>
        </div>
        <div>
          <h3>Total: </h3>
          <button className="btn btn-secondary">Empty Cart</button>
        </div>
      </div>
    )
  }
}
