import React, {Component} from 'react'

import Cart from "../components/Cart"
import ProductList from "../components/ProductList"

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        name: "",
        price: 0,
        quantity: 0

      },
      cart: []
    }
  }
  addToCart =(event) => {
  event.preventDefault()
  this.setState({
    item: {
      name: "product name",
      price: 9,
      quantity: 1

  }})
  this.state.cart.push(this.state.item)
  this.setState({
    item: {}
  })

}
  render() {
    return (
      <div>
        <Cart/>
        <ProductList addToCart={this.addToCart}/>
      </div>
    )
  }
}
