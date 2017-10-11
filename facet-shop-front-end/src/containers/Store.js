import React, {Component} from 'react'

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
        I am the Store Screen!
      </div>
    )
  }
}
