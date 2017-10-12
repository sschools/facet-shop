import React, {Component} from 'react'


export default class CartItem extends Component {
constructor(){
  super()
}

_handleTrash = (event) => {
  event.preventDefault();
  this.props.removeFromCart()
  // pass this.props.item so you can have it filter by the item.name
}


  render() {
    return (
      <ul className="hvr-grow d-flex cart-list-fix">
        <li className="list-group-item border-0 col-5">Product</li>
        <li className="list-group-item border-0 col-3">Price</li>
        <li className="list-group-item border-0 col-3">Quantity</li>
        <i onClick={this._handleTrash} className="fa fa-trash-o list-group-item border-0 col-1"></i>
      </ul>
    )
  }
}
