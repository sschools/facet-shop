import React, { Component } from 'react';

export default class ProductCard extends component {
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
          <div class="card-body">
            <h4 class="card-title product-name">Product Name</h4>
            <p class="card-text">Price</p>
            <form >
              <input placeholder="quantity"/>
              <button type="submit"></button>
            </form>
        </div>
      </div>
    )
  }
}
}
