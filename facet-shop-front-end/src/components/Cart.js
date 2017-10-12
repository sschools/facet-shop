import React, {Component} from 'react'
import "../styles/Cart.css"
import CartItem from "./CartItem"

export default class Cart extends Component {
  constructor(){
    super()
  }

  _handleEmptyCart= (event) => {
    event.preventDefault();
    this.props.emptyCart();
  }

  render() {
    return (
      <div className="card bg-light shopping-cart">
        <div className="facet-bg card-header cart-header d-flex justify-content-start align-items-center">
          <i className="fa fa-shopping-cart fa-2x m-2"></i>
          <h3>Shopping Cart</h3>
        </div>
        <div className="item-catcher col-10">
          <ul className="d-flex cart-list-fix">
            <li className="list-group-item border-0 col-5">Product</li>
            <li className="list-group-item border-0 col-3">Price</li>
            <li className="list-group-item border-0 col-3">Quantity</li>
            <li className="list-group-item border-0 col-1"></li>
          </ul>
          <hr className="separator-line"/>
          <CartItem
            cartItems={this.props.cart}
          />
        </div>
        <div className="facet-bg d-flex flex-column align-items-end">
          <h3 className="">Total: $69.99</h3>
          {/* link to balance due */}
          <button onClick={this._handleEmptyCart} className="btn btn-light">Empty Cart</button>
        </div>
      </div>
    )
  }
}
