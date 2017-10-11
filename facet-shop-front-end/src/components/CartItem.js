import React, {Component} from 'react'


export default class CartItem extends Component {

  render() {
    return (
      <ul className="d-flex cart-list-fix">
        <li className="list-group-item border-0 col-3">Product</li>
        <li className="list-group-item border-0 col-3">Price</li>
        <li className="list-group-item border-0 col-3">Quantity</li>
        <li className="list-group-item border-0 col-3">Remove</li>
      </ul>
    )
  }
}
