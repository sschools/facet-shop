import React, {Component} from 'react'


export default class CartItem extends Component {
constructor(){
  super()
}

// _handleTrash = (event) => {
//   event.preventDefault();
//   this.props.removeFromCart(event.target.value)
// }


  render() {
    return (
      <ul className="d-flex cart-list-fix">
        <li className="list-group-item border-0 col-3">Product</li>
        <li className="list-group-item border-0 col-3">Price</li>
        <li className="list-group-item border-0 col-3">Quantity</li>
        <i className="fa fa-trash-o list-group-item border-0 col-3"></i>
      </ul>
    )
  }
}
