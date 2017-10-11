import React, { Component } from 'react';

export default class ProductCard extends Component {
  // constructor(props) {
  //   super(props)
  //   this.State = {
  //     inputVal: ""
  //   }
  // _handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log('handling submit')
  // }
  render() {
    return (
      <div className="card">
         <img className="card-img-top" src="" alt="Card image"/>
          <div className="card-body">
            <h4 className="card-title product-name">Product Name</h4>
            <p className="card-text">Price</p>
            <form >
              <input placeholder="quantity"/>
              <button type="submit"></button>
            </form>
        </div>
      </div>
    )
  }
}
