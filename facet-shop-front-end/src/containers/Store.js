import React, {Component} from 'react'

import Cart from "../components/Cart"
import ProductList from "../components/ProductList"

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        name: "",
        quantity: 0,
        imgUrl: ""
      }
    }
  }



  render() {
    return (
      <div>
        <Cart/>
        <ProductList/>
      </div>
    )
  }
}
