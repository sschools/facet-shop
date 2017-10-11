import React, {Component} from 'react'


export default class CartItem extends Component {

  render() {
    return (
      <ul className="item-card">
        <li>Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Trash Icon</li>
      </ul>
    )
  }
}
