import React, {Component} from 'react'
import "../styles/Cart.css"
import CartItem from "./CartItem"

export default class Cart extends Component {

  render() {
    return (
      <div className="card bg-light shopping-cart">
        <div className="card-header cart-header d-flex">
          <i>shoping cart icon here</i>
          <h3>Shopping Cart</h3>
        </div>
        <div className="item-catcher">
          <ul className="d-flex cart-list-fix">
            <li className="list-group-item border-0 col-3">Product</li>
            <li className="list-group-item border-0 col-3">Price</li>
            <li className="list-group-item border-0 col-3">Quantity</li>
            <li className="list-group-item border-0 col-3">Remove</li>
          </ul>
          <hr className="separator-line"/>
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
