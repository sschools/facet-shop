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
      user: {
        cart: []
      }
    }
  }
  addToCart =(productInfo) => {
    // console.log("productInfo", productInfo.inputVal);
  this.setState({
    item: {
      name: "product name",
      price: 9,
      quantity: productInfo.inputVal
  }})
  this.state.user.cart.push(this.state.item)
  // this.setState({
  //   item: {}
  // })
}

  // removeFromCart = (productInfo) => {
  //   this.state.cart.filter((product) => {
  //     if (productInfo.)
  //   })
  // }

  emptyCart = () => {
    this.setState({
      user: {
        cart: []
      }
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <Cart
          {...this.state}
          emptyCart={this.emptyCart}
          removeFromCart={this.removeFromCart}
        />
        <ProductList
          addToCart={this.addToCart}
        />
      </div>
    )
  }
}
